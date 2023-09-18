"use client"

import { Block, BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";

type Args = {
	onContentChange?: (blocks: Block[]) => void
	initialBlocks?: PartialBlock[] | null
}

export default function EditorHost  (props: Args)  {
	const { onContentChange, initialBlocks} = props// Create
	console.log(`*** initial `, initialBlocks)// s a new editor instance.
	const editor: BlockNoteEditor | null = useBlockNote({
		onEditorContentChange: (content) => {
			if (onContentChange) {
				onContentChange(content.topLevelBlocks)
			}
		},
		initialContent: initialBlocks? initialBlocks : undefined
	});

	// Renders the editor instance using a React component.
	return <div className="p-16">
		<div className="text-3xl">fff</div>
		<BlockNoteView editor={editor}/>
	</div>


}