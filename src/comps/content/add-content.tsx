"use client";

import { uid } from "@/lib";
import { Button, Flex, Heading, TextArea } from "@radix-ui/themes";
import { useForm, SubmitHandler } from "react-hook-form";
import { ContentType, PartialContent } from "./context-type";
import { supabase } from "@/supa/supabase-browser";
import { useSession } from "@/biz/use-session";
import { useAtom } from "jotai";
import { contentToc } from "./content-toc-atom";
import { mergeContentToc } from "./utils";

interface AddContentProps {
    category: string;
    contentId?: string;
}

const upsertContent = async (data: ContentType) => {
    const response = await supabase
        .from('contents')
        .upsert(data as any)
        .select('*')
    return response
}



export const AddContent = (props: AddContentProps) => {
    const { category, contentId = uid() } = props;
    const { session } = useSession()
    const [_, setContents] = useAtom(contentToc)
    const { register, handleSubmit, watch, formState: { errors } } = useForm<ContentType>();
    const onSubmit: SubmitHandler<ContentType> = async (data) => {
        const patch = { ...data, category, user_id: session?.user.id || "", contentId }
        const response = await upsertContent(patch)
        const { data: inserted } = response
        if (inserted) {
            const extra = inserted as PartialContent[]
            setContents((prev) => mergeContentToc(prev, extra[0]))
        }
    }

    return <div className="my-8">
        <Heading>Add Content</Heading>
        <div>contentId: {contentId}</div>
        <div>User Session: {session?.user?.id}</div>
        <div className="p-4 grid grid-cols-1">
            <Button className="w-24" onClick={() => handleSubmit(onSubmit)()} >Add</Button>
            <Flex className="mt-2" direction="column" gap="3" style={{ maxWidth: 500 }}>
                <TextArea variant="surface" placeholder="tile" {...register("title")} />
                <TextArea variant="classic" placeholder="description" {...register("description")} />
                <TextArea variant="soft" placeholder="content" {...register("content")} />
            </Flex>
        </div>


    </div>

}