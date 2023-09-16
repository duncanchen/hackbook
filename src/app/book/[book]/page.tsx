import { getServerSupabase, fetchServerSession } from "@/supa/supabase-server"
import { NextApiRequest } from "next"
import { NextRequest } from "next/server"

interface BookPageRequest {
    params: {
        book: string
    }
}

const provisionMy = async (userId: string) => {
    const supabase = getServerSupabase()
    const resp = await supabase.from('books').upsert({
        bookId: 'my-' + userId,
        updated_at: new Date(),
        user_id: userId,
    })
    console.log(resp)
}

export default async function Page(req: NextRequest) {
    const { params } = req as any as BookPageRequest
    const session = await fetchServerSession()
    await provisionMy(session.user.id)

    return <div>
        <h1>{params.book}</h1>

    </div>

}