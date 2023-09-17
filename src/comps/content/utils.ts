import { PartialContent } from "./context-type"

export const mergeContentToc = (toc: PartialContent[], update: PartialContent | undefined | null): PartialContent[] => {
    if (!update) { return toc }
    const merged = [
        update,
        ...toc.filter(c => c.contentId != update.contentId),
    ]
    return merged.sort((a, b) => { return (a.updated_at! > b.updated_at!) ? -1 : 1 })
}