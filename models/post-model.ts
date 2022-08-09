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
  comments: string[]
  likes: string[]
}