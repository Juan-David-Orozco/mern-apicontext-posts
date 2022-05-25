import { useState, createContext } from "react"

export const context = createContext()

export const PostContainer = ({children}) => {

  const [posts, setPosts] = useState([])
  console.log(posts)

  return (
    <context.Provider value={{
      posts,
      setPosts
    }}>
      {children}
    </context.Provider>
  )
}