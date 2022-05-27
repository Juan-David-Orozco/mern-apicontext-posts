import { useState, useEffect, createContext, useContext } from "react"
import { createPostRequest, getPostsRequests, deletePostRequest, getPostRequest } from '../api/posts'

const postContext = createContext()

/* Se define un hook para que los componentes que esten
anidados puedan usar el contexto y por ende el estado */
export const usePosts = () => {
  const context = useContext(postContext)
  return context
}

// Componente que corresponde al contexto
export const PostProvider = ({children}) => {

  const [posts, setPosts] = useState([])

  const getPosts = async () => {
    const res = await getPostsRequests()
    setPosts(res.data)
  }

  const createPost = async (post) => {
    const res = await createPostRequest(post)
    setPosts([...posts, res.data])
  }

  const deletePost = async (postId) => {
    console.log(postId)
    const res = await deletePostRequest(postId)
    if(res.status === 204){
      setPosts(posts.filter((post) => post._id !== postId))
    }
  }

  const getPost = async (postId) => {
    const res = await getPostRequest(postId)
    console.log(res.data)
    return res.data
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <postContext.Provider value={{
      posts,
      getPosts,
      createPost,
      deletePost,
      getPost
      //setPosts
    }}>
      {children}
    </postContext.Provider>
  )
}