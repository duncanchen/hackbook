"use client";


import { supabase } from "@/supa/supabase-browser";
import { Button } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
export const LogoutBtn = () => {
    const router = useRouter()
    const singOut = async () => {
        await supabase.auth.signOut()
    }
    return <Button color="red" onClick={singOut}>Logout</Button>
}