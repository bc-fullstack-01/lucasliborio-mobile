export interface Profile {
  _id: string,
  username: string,
  following: string[]
  followers: string[]
  follow: boolean
}