import { ContentPanel } from "@/comps/content/content-panel"
import { NextRequest } from "next/server"

export default async function Page(req: NextRequest) {
    return <ContentPanel />
}