import { useState } from "react"
import type { Post, UpdatePostDTO } from "../types/posts.interface"
import { Pencil, Trash2 } from "lucide-react";

import PostForm from "./post-form"
import DeleteModal from "./delete-modal"
import Modal from "./modal"

type Props = {
    post: Post
    currentUser: string
    onEdit: (id: number, data: UpdatePostDTO) => Promise<void>
    onDelete: (id: number) => Promise<void>
}

export default function PostCard({
    post,
    currentUser,
    onEdit,
    onDelete
}: Props) {
    const [showEdit, setShowEdit] = useState(false)
    const [showDelete, setShowDelete] = useState(false)

    const isOwner = post.username === currentUser

    async function handleEdit(data: UpdatePostDTO) {
        await onEdit(post.id, data)
        setShowEdit(false)
    }

    async function handleDelete() {
        await onDelete(post.id)
        setShowDelete(false)
    }

    return (
        <>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="bg-gray-50 px-4 py-3 flex items-center justify-between">
                    <h2 className="font-semibold text-gray-800">{post.title}</h2>

                    {isOwner && (
                        <div className="flex gap-2">
                            <button
                                onClick={() => setShowEdit(true)}
                                className="text-sm"
                            >
                                <Pencil className="w-4 h-4 text-amber-300" />
                            </button>

                            <button
                                onClick={() => setShowDelete(true)}
                                className="text-sm text-red-600"
                            >
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>
                    )}
                </div>

                <div className="px-4 py-3">
                    <p className="text-sm text-gray-500">@{post.username}</p>
                    <p className="mt-2 text-gray-700 leading-relaxed">
                        {post.content}
                    </p>
                </div>
            </div>

            {showEdit && (
                <Modal onClose={() => setShowEdit(false)}>
                    <PostForm
                        initialData={{
                            title: post.title,
                            content: post.content
                        }}
                        submitLabel="Save"
                        onSubmit={handleEdit}
                        onCancel={() => setShowEdit(false)}
                    />
                </Modal>
            )}

            {showDelete && (
                <DeleteModal
                    onConfirm={handleDelete}
                    onCancel={() => setShowDelete(false)}
                />
            )}
        </>
    )
}