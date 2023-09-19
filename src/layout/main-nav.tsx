"use client"

import { useSessionStore } from "@/biz"
import { Avatar, Button, Text } from "@radix-ui/themes"
import { Session } from "@supabase/supabase-js"
import { ExitIcon } from "@radix-ui/react-icons"
import { supabase } from "@/supa/supabase-browser"
import { useRouter } from "next/navigation"

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
	const { session, signedOut, signOut } = useSessionStore()
	const router = useRouter()
	if (signedOut) {
		router.push('/')
	}
	const avatar = extractAvatar(session)
	const handler = async () => {
		await supabase.auth.signOut()
		signOut()
	}
	return <div className="flex flex-row justify-between h-[5rem]">
		<Text color="lime" className="text-[1rem] font-extrabold">Books</Text>
		<div className="flex flex-row justify-end items-center gap-4 mx-4">
			<SafeAvatar src={avatar} fallback="X" />
			<Button variant="ghost" onClick={handler}><ExitIcon /> </Button>
		</div>
	</div>
}