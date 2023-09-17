import { Table } from "@radix-ui/themes"
import { PartialContent } from "./context-type"
import { useAtom } from "jotai"
import { contentToc } from "./content-toc-atom"
import { timeAgo } from "@/lib"

export const ContentTable = () => {
    const [toc] = useAtom(contentToc)
    return <Table.Root>
        <Table.Header>
            <Table.Row>
                <Table.ColumnHeaderCell>id</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>updated</Table.ColumnHeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
            {
                toc.map((content) => {
                    return <Table.Row key={content.contentId!}>
                        <Table.RowHeaderCell>{content.contentId}</Table.RowHeaderCell>
                        <Table.Cell>{content.title}</Table.Cell>
                        <Table.Cell>{content.description}</Table.Cell>
                        <Table.Cell>{timeAgo(content.updated_at)}</Table.Cell>
                    </Table.Row>

                })
            }


        </Table.Body>
    </Table.Root>
}