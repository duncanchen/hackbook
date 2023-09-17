export type ContentType = {
    contentId: string,
    user_id: string,
    title: string,
    description: string,
    content: string,
    updated_at: string,
    category: string,
}

export type PartialContent = Partial<ContentType>