import { useState } from "react"
import type { UpdatePostDTO } from "../types/posts.interface"

type Props = {
    initialData?: UpdatePostDTO
    onSubmit: (data: UpdatePostDTO) => Promise<void>
    onCancel: () => void
    submitLabel?: string
}

export default function PostForm({
    initialData,
    onSubmit,
    onCancel,
    submitLabel = "Create"
}: Props) {
    const [title, setTitle] = useState(initialData?.title ?? "")
    const [content, setContent] = useState(initialData?.content ?? "")

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()

        if (!title.trim() || !content.trim()) return

        await onSubmit({ title, content })
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">

            <h2 className="text-xl font-bold">
                {initialData ? "Edit Post" : "Create Post"}
            </h2>

            <input
                className="w-full border p-2 rounded"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
                className="w-full border p-2 rounded"
                rows={4}
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />

            <div className="flex justify-end gap-2">

                <button
                    type="button"
                    onClick={onCancel}
                    className="border px-4 py-1 rounded"
                >
                    Cancel
                </button>

                <button
                    type="submit"
                        
                    disabled={!title.trim() || !content.trim()}
                    className="bg-blue-500 text-white px-4 py-1 rounded disabled:opacity-50"
                >
                    {submitLabel}
                </button>

            </div>
        </form>
    )
}