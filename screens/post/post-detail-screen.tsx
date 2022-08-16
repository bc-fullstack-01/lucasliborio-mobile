import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import server from "../../api/server";
import { CommentButton } from "../../components/action-buttons/comment";
import { CommentList } from "../../components/comment-list";
import { PostCard } from "../../components/post-card";
import { AuthContext } from "../../context/auth-context";
import { Comment } from "../../models/comment-model";
import { Post } from "../../models/post-model";

interface Props {
  route: any
}
export default function PostDetailScreen({ route }: Props) {
  const { postId } = route.params
  
  const { token } = useContext(AuthContext)
  const [post, setPost] = useState<Post>()

  useEffect(() => {
    const getPostById = async () => {
      try {
        const response = await server.get(`/post/${postId}`, {
          headers: {
            authorization: `Bearer ${token}`
          }
        })
        setPost(() => response.data)
      } catch (error: any) {
        console.log(error.response)
      }
    }
    getPostById()
    
  }, [])

  return (
    <>
      {post && <PostCard
        handleClick={() => { }}
        post={post}
      />}
      <CommentList
        postId={postId}
        comments={post?.comments as unknown as Comment[]}
        onHandleComment={setPost}
      />
    </>
  )
}

const style = StyleSheet.create({

})