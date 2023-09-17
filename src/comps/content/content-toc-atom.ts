"use client"

import { atom } from "jotai"
import { PartialContent } from "./context-type"

export const contentToc = atom<PartialContent[]>([])
export const focusContent = atom(null as PartialContent | null)

