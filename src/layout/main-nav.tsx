"use client"

import { useSession } from "@/biz/use-session"
import { Avatar, Button, Text } from "@radix-ui/themes"
import { Session } from "@supabase/supabase-js"
import { ExitIcon } from "@radix-ui/react-icons"
import { supabase } from "@/supa/supabase-browser"
import { useRouter } from "next/navigation"
import { ThemePanel } from "@radix-ui/themes"

const extractAvatar = (session: Session | null) => {
    if (session) {
        return session.user?.user_metadata?.avatar_url
    }
    return null
}


const SafeAvatar = ({ src, fallback }: { src: string | null, fallback: string }) => {
    if (src) {
        return <Avatar src={src} fallback={fallback} />
    }
    return <></>
}

export const MainNav = () => {
    const { session, signedOut } = useSession()
    const router = useRouter()
    if (signedOut) {
        router.push('/')
    }
    const avatar = extractAvatar(session)
    const signOut = () => {
        supabase.auth.signOut()
    }
    return <div className="flex flex-row justify-between p-2">
        <Text color="lime" className="text-[2rem] font-extrabold" >Books</Text>
        <div className="flex flex-row justify-end items-center gap-4 mx-4">
            <SafeAvatar src={avatar} fallback="X" />
            <Button variant="ghost" onClick={signOut}><ExitIcon />  </Button>
        </div>
    </div>
}