export interface Comment {
  _id: string
  content: string,
  likes: string[]
  postId: string,
  profileId: {
    _id: string,
    username: string
  }
}