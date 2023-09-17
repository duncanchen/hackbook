import { cookies, } from "next/headers"
import { createServerComponentClient, } from '@supabase/auth-helpers-nextjs';

import { Database, Session } from "./supabase"

const serverSupabase =  createServerComponentClient<Database>({
    cookies
})
export const getServerClient = () => serverSupabase


export const getInstance = () => serverSupabase


export const fetchServerSession = async () => {
    const supabase = getServerClient()
    const {
        data: { session },
    } = await supabase.auth.getSession()
    return session as Session
}