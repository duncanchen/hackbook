import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Session } from "@/supa/supabase";

type SessionStore = {
    session: Session | null
    setSession(session: Session | null): void
    signedOut: boolean
    signOut(): void
}
export const useSessionStore = create<SessionStore>()(persist((set, get) => ({
    session: null,
    signedOut: false,
    setSession: (session) => set({ session, signedOut: (session === null)}),
    signOut: () => set({ session: null, signedOut: true })
}), {
    name: 'session-storage',
}));