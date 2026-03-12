import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import type { LoginProps } from "../types/login-props.type"
import type { CreatePostDTO, Post, UpdatePostDTO } from "../types/posts.interface"

import { createPost, deletePost, getPosts, updatePost } from "../api/api"

import PostVirtualList from "../components/post-virtual-list"
import PostForm from "../components/post-form"
import Modal from "../components/modal"

export default function Home({ setUsername }: LoginProps) {
  const navigate = useNavigate()
  const username = localStorage.getItem("username") ?? ""

  const [posts, setPosts] = useState<Post[]>([])
  const [showCreate, setShowCreate] = useState(false)

  function logout() {
    localStorage.removeItem("username")
    setUsername(null)
    navigate("/login")
  }

  async function refreshPosts() {
    const data = await getPosts()
    setPosts(data.results)
  }

  useEffect(() => {
    async function loadPosts() {
      const data = await getPosts()
      setPosts(data.results)
    }

    loadPosts()
  }, [])

  async function handleCreate(data: UpdatePostDTO) {
    const payload: CreatePostDTO = {
      username,
      ...data
    }

    await createPost(payload)
    await refreshPosts()
    setShowCreate(false)
  }

  async function handleEdit(id: number, data: UpdatePostDTO) {
    await updatePost(id, data)
    await refreshPosts()
  }

  async function handleDelete(id: number) {
    await deletePost(id)
    await refreshPosts()
  }

  return (
    <div className="p-6 bg-gray-100 h-screen flex flex-col overflow-hidden">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">CodeLeap Network</h1>
        <button
          onClick={logout}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      <div className="mt-6 w-[60%] mx-auto flex flex-col flex-1 min-h-0 overflow-hidden">

        <button
          onClick={() => setShowCreate(true)}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mb-4 self-start"
        >
          Create Post
        </button>

        {showCreate && (
          <Modal onClose={() => setShowCreate(false)}>
            <PostForm
              onSubmit={handleCreate}
              onCancel={() => setShowCreate(false)}
              submitLabel="Create"
            />
          </Modal>
        )}

        <div className="flex-1 min-h-0">
          <PostVirtualList
            posts={posts}
            currentUser={username}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  )
}