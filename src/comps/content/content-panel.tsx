"use client";

import { useAtom } from "jotai";
import { categoryAtom } from "../nav";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/supa/supabase-browser";
import { useSession } from "@/biz/use-session";
import { Heading } from "@radix-ui/themes";
import { AddContent } from "./add-content";
import { PartialContent } from "./context-type";
import { ContentTable } from "./content-table";
import { contentToc, focusContent } from "./content-toc-atom";

export const ContentPanel = () => {
	const [focused, setFocused] = useAtom(focusContent)
	const [category] = useAtom(categoryAtom)
	const [_, setContents] = useAtom(contentToc)
	const {session,} = useSession()
	console.log('** what is this -- session', session)
	const {data: contents, isLoading} = useQuery(['content', category], async () => {
		const {data, error} = await supabase.from('contents').select('contentId, title, description, updated_at')
			.eq('category', category).eq('user_id', session?.user?.id || "")
			.order('updated_at', {ascending: false})
		console.log(data, error)
		if (data) {
			setFocused(null)
			setContents(data as PartialContent[])
			return data as PartialContent[]
		} else {
			throw error
		}
	}, {
		enabled: !!session && !!category,
		refetchOnWindowFocus: true,
		refetchOnReconnect: true,
	})
	if (!session) {
		return  <div className="text-[3rem] pt-8 font-extrabold text-amber-600">No session, why?</div>
	}
	if (isLoading) {
		return <div>loading...</div>
	}
	return <div>
		<div className="hidden">{session?.user.id}</div>
		<Heading>{category}</Heading>
		<ContentTable/>
		<AddContent category={category}/>
	</div>
}