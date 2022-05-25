import { useContext } from 'react'
import { context } from '../context/postContext'

export function PostForm() {

  const {posts} = useContext(context)
  console.log(posts)

  return (
    <div>PostForm</div>
  )
}
