import { Button, Table } from "@radix-ui/themes"
import { useAtom } from "jotai"
import { contentToc, focusContent } from "./content-toc-atom"
import { timeAgo, uid } from "@/lib"
import { ContentEditor } from "./content-editor";
import { PartialContent } from "./context-type";

export const ContentTable = () => {
	const [toc] = useAtom(contentToc)
	const [focused, setFocused] = useAtom(focusContent)
	const handler = (ctn: PartialContent) => {
		setFocused(ctn)
	}
	const preNewContent = () => {
		setFocused({contentId: uid()})
	}
	const finalToc = (focused) ? toc.filter((ctn) => ctn.contentId === focused.contentId) : toc
	return <>
		<div className="flex flex-row justify-end" onClick={preNewContent}><Button>Add</Button></div>
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
					finalToc.map((content) => {
						return <Table.Row key={content.contentId} onClick={() => handler(content)}>
							<Table.RowHeaderCell>{content.title}</Table.RowHeaderCell>
							<Table.Cell>{content.description}</Table.Cell>
							<Table.Cell>{timeAgo(content.updated_at)}</Table.Cell>
						</Table.Row>
					})
				}


			</Table.Body>
		</Table.Root>
		{
			(focused) ? <ContentEditor content={focused}/> : null
		}
	</>

}