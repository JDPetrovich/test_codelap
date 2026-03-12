import type { CreatePostDTO, Post, UpdatePostDTO } from "../types/posts.interface"

const API_URL = import.meta.env.VITE_API_URL

export async function getPosts() {
    const res = await fetch(API_URL)
    return res.json()
}

export async function createPost(data: CreatePostDTO): Promise<Post> {
    const res = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })

    return res.json()
}

export async function deletePost(id: number) {
    await fetch(`${API_URL}${id}/`, {
        method: "DELETE",
    })
}

export async function updatePost(id: number, data: UpdatePostDTO): Promise<Post> {
    const res = await fetch(`${API_URL}${id}/`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })

    return res.json()
}