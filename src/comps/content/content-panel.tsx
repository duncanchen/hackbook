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
import { contentToc } from "./content-toc-atom";

export const ContentPanel = () => {
    const [category] = useAtom(categoryAtom)
    const [_, setContents] = useAtom(contentToc)
    const { session, } = useSession()
    const { data: contents, isLoading } = useQuery(['content', category], async () => {
        const { data, error } = await supabase.from('contents').select('contentId, title, description, updated_at')
            .eq('category', category).eq('user_id', session?.user?.id || "")
            .order('updated_at', { ascending: false })
        console.log('fetching....', data)
        if (data) {
            setContents(data as PartialContent[])
            return data as PartialContent[]
        }
        else {
            throw error
        }
    }, {
        enabled: !!session && !!category,
    })
    if (isLoading) {
        return <div>loading...</div>
    }

    return <div>
        <Heading>{category}</Heading>
        <ContentTable />
        <AddContent category={category} />
    </div>
}