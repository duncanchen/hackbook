"use client"

import { useEffect } from "react";
import { supabase } from "@/supa/supabase-browser";
import { Button } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { useBookStore } from "@/store/use-book-store";

export const LoginBtn = ({ hidden }: { hidden?: boolean }) => {
    const router = useRouter()
    const { setBookId } = useBookStore()
    useEffect(() => {
        // This function will be triggered whenever there's an authentication change
        const { data: authListener } = supabase.auth.onAuthStateChange(
            async (event, session) => {
                switch (event) {
                    case 'SIGNED_IN':
                        if (session?.user) {
                            console.log('** singed in', session.user)
                            const bookId = 'my-' + session.user.id
                            setBookId(bookId)
                            router.push(`/content`)
                        }

                        break;
                    default:
                        console.log('** event:', event)
                        break
                }
            }
        );

        // When component is unmounted, unsubscribe from the listener
        return () => {
            authListener.subscription.unsubscribe();
        };
    }, []);



    if (hidden) return <div className="min-w-full min-h-screen grid place-items-center items-center">
        <div className="w-128 h-32 text-primary">Fetching ...</div>
    </div>

    const handler = async () => {
        const { error } = await supabase.auth.signInWithOAuth(
            { provider: 'github' })
        if (error) console.log('Error: ', error)
    }
    return <Button onClick={() => handler()}> Github</Button>
}
