export interface PostBase {
  title: string
  content: string
}

export type UpdatePostDTO = PostBase

export interface CreatePostDTO extends PostBase {
  username: string
}

export interface Post extends PostBase {
  id: number
  username: string
  created_datetime: string
}