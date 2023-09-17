import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "./supabase";

export const supabase = createClientComponentClient<Database>();

function extractFirstPartOfDomain(url: string): string | null {
    // Extract hostname from the URL
    const hostname = new URL(url).hostname;

    // Extract the first part of the hostname
    const match = hostname.match(/^([a-zA-Z0-9\-]+)\./);
    return match ? match[1] : null;
}

export function supabaseProjectId() {
    return extractFirstPartOfDomain(process.env["NEXT_PUBLIC_SUPABASE_URL"] || "");
}

// export function supabaseCookie() {
//     return `sb-${supabaseProjectId()}-auth-token`;
// }

// export const signOffClient = () => {
//     Cookie.remove(supabaseCookie())
// }