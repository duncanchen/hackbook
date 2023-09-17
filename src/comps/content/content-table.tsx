import { Table } from "@radix-ui/themes"
import { PartialContent } from "./context-type"
import { useAtom } from "jotai"
import { contentToc } from "./content-toc-atom"
import { timeAgo } from "@/lib"
import { ContentEditor } from "./content-editor"

export const ContentTable = () => {
    const [toc] = useAtom(contentToc)
    const handler = (id: string) => {
        console.log('clicked', id)
    }
    return <>
        <div>Content Table</div>
        <Table.Root>
            <Table.Header>
                <Table.Row>
                    <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>updated</Table.ColumnHeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {
                    toc.map((content) => {
                        return <Table.Row
                            onClick={() => handler(content.contentId!)}
                            key={content.contentId!}>
                            <Table.RowHeaderCell>{content.title}</Table.RowHeaderCell>
                            <Table.Cell>{content.description}
                            </Table.Cell>
                            <Table.Cell>{timeAgo(content.updated_at)}</Table.Cell>
                        </Table.Row>

                    })
                }


            </Table.Body>
        </Table.Root>
    </>
}