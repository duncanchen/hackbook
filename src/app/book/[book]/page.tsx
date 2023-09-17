import { getInstance, fetchServerSession } from "@/supa/supabase-server"
import { NextRequest } from "next/server"

interface BookPageRequest {
    params: {
        book: string
    }
}

// const provisionMy = async (userId: string) => {
//     const supabase = getServerSupabase()
//     const { data: resp, error } = await supabase
//         .from('books')
//         .upsert({ user_id: userId, title: 'My Book' })
//     console.log(resp)
// }

export default async function Page() {
    // const { params } = req as any as BookPageRequest
    const session = await fetchServerSession()
    // await provisionMy(session.user.id)

    return <div>
        Hello

    </div>

}