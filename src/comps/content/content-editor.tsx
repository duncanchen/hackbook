"use client"

import React from 'react';
import { ContentType, PartialContent } from "@/comps/content/context-type";
import { Button, Flex, TextArea, TextField } from '@radix-ui/themes';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSessionStore } from '@/biz';
import { useAtom } from 'jotai';
import { contentToc, focusContent } from './content-toc-atom';
import { mergeContentToc } from './utils';
import { supabase } from '@/supa/supabase-browser';
import { BadgeIcon, BookmarkIcon } from '@radix-ui/react-icons';
import { Block, PartialBlock } from "@blocknote/core";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("./editor-host"), {ssr: false});

type Args = {
	content: PartialContent
}
const upsertContent = async (data: ContentType) => {
	const response = await supabase
		.from('contents')
		.upsert(data as any)
		.select('*')
	return response
}

const objectify = (content: PartialContent) => {
	const {content: ctn} = content
	try {
		const initial = JSON.parse(ctn || "")
		console.log('** objectify', initial)
		return initial
	} catch (e) {
		return undefined
	}
}

export const ContentEditor = ({content}: Args) => {
	const blocksRef = React.useRef<PartialBlock[] | null>(objectify(content))
	const {session} = useSessionStore()
	const [, setFocused] = useAtom(focusContent)
	const [_, setContents] = useAtom(contentToc)
	const {register, handleSubmit, watch, formState: {errors}} = useForm<ContentType>({
		defaultValues: content
	});
	const onContentChanged = (blocks: Block[]) => {
		blocksRef.current = [...blocks]
		console.log('** onContentChanged', blocksRef.current)
	}
	const onSubmit: SubmitHandler<ContentType> = async (data) => {
		const patch = {
			...data,
			updated_at: new Date().toISOString(),
			user_id: session?.user.id || "",
			content: JSON.stringify(blocksRef.current)
		}
		const response = await upsertContent(patch)
		const {data: inserted} = response
		if (inserted) {
			const extra = inserted as PartialContent[]
			setContents((prev) => mergeContentToc(prev, extra[0]))
		}
	}

	return <>
		<div className="text-[3rem] mt-8 font-extrabold"> Content Editor</div>
		<div className='text-xs font-bold leading-3 text-gray-600'> {content.contentId} | {session?.user?.id} </div>
		<div className="grid grid-cols-1 mt-8">
			<div className="flex flex-row gap-4">
				<Button className="w-24" accessKey='f5' onClick={() => handleSubmit(onSubmit)()}>Save</Button>
				<Button className="w-24" variant="ghost" onClick={() => setFocused(null)}>Done</Button>
			</div>
			<Flex className="mt-2" direction="column" gap="3" style={{maxWidth: 500}}>
				<TextField.Root>
					<TextField.Slot>
						<BadgeIcon height="16" width="16"/>
					</TextField.Slot>
					<TextField.Input placeholder="Title" {...register("title")} />
				</TextField.Root>

				<TextField.Root>
					<TextField.Slot>
						<BookmarkIcon height="16" width="16"/>
					</TextField.Slot>
					<TextField.Input placeholder="Description" {...register("description")} />
				</TextField.Root>

				<TextArea variant="soft" placeholder="content" {...register("content")} />
			</Flex>
			<Editor initialBlocks={objectify(content)} onContentChange={onContentChanged}/>
		</div>
	</>
}



