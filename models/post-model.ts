import { Comment } from "./comment-model"

export interface Post {
  _id: string,
  title: string,
  description: string,
  profileId: {
    _id: string,
    username: string,
    posts: string[],
    followers: string[],
    following: string[]

  },
  hasImage: boolean
  imageUrl: string,
  comments: string[] | Comment[]
  likes: string[]
}