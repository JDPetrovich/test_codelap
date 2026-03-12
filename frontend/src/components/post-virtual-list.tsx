import { useRef } from "react"
import { useVirtualizer } from "@tanstack/react-virtual"
import type { Post, UpdatePostDTO } from "../types/posts.interface"
import PostCard from "./post-card"

type Props = {
  posts: Post[]
  currentUser: string
  onEdit: (id: number, data: UpdatePostDTO) => Promise<void>
  onDelete: (id: number) => Promise<void>
}

export default function PostVirtualList({
  posts,
  currentUser,
  onEdit,
  onDelete
}: Props) {
  const parentRef = useRef<HTMLDivElement>(null)

  const rowVirtualizer = useVirtualizer({
    count: posts.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 140,
    overscan: 5
  })

  return (
    <div
      ref={parentRef}
      className="h-full overflow-y-auto bg-zinc-100 rounded"
    >
      <div
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
          position: "relative"
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualRow) => {
          const post = posts[virtualRow.index]

          return (
            <div
              key={post.id}
              className="py-3"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                transform: `translateY(${virtualRow.start}px)`
              }}
            >
              <PostCard
                post={post}
                currentUser={currentUser}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}