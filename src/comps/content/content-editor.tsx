"use client"

import React from 'react';
import { PartialContent } from "@/comps/content/context-type";

type Args = {
	content: PartialContent
}

export const ContentEditor = ({content}: Args) => {
	return <div className="text-[5rem] my-8"> Content Editor</div>
}



