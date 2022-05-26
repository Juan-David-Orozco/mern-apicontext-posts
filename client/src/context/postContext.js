import { useState, createContext, useContext } from "react"

const postContext = createContext()

export const usePosts = () => {
  const context = useContext(postContext)
  return context
}

export const PostProvider = ({children}) => {

  const [posts, setPosts] = useState([])

  return (
    <postContext.Provider value={{
      posts,
      //setPosts
    }}>
      {children}
    </postContext.Provider>
  )
}