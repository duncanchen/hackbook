"use client";

import { Session } from "@/supa/supabase";
import { supabase } from "@/supa/supabase-browser";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export const useSession = () => {
    const [session, setSession] = useState<Session | null>(null)
    const [signedOut, setSignedOut] = useState<boolean>(false)

    const { } = useQuery(["session"], async () => {
        const { data } = await supabase.auth.getSession()
        const { session: supaSession } = data

        console.log('[useSession] session', supaSession)
        setSession(supaSession as any)
        return supaSession
    }, {
        enabled: true,
        refetchOnWindowFocus: true
    })


    useEffect(() => {
        // This function will be triggered whenever there's an authentication change
        const { data: authListener } = supabase.auth.onAuthStateChange(
            async (event, session) => {
                switch (event) {
                    case 'SIGNED_OUT':
                        console.log('** singed out')
                        setSession(null)
                        setSignedOut(true)
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
    return { session, signedOut }
}