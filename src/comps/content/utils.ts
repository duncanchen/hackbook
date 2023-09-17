import { PartialContent } from "./context-type"

export const mergeContentToc = (toc: PartialContent[], update: PartialContent | undefined | null): PartialContent[] => {
    if (!update) { return toc }
    return [
        update,
        ...toc.filter(c => c.contentId != update.contentId),
    ]
}