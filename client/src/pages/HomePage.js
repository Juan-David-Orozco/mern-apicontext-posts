import { usePosts } from '../context/postContext'
import { VscEmptyWindow } from 'react-icons/vsc'
import { Link } from 'react-router-dom'

export function HomePage() {

  const { posts } = usePosts()

  if(posts.length === 0) return (
    <div className='flex flex-col justify-center items-center'>
      <VscEmptyWindow className='w-24 h-24'/>
      <h1 className='3xl'>No hay publicaciones</h1>
    </div>
  )

  return (
    <div>

      <Link to="/new">Crear Nuevo Post</Link>

      {
        posts.map((post) => (
          <div key={post._id}>
            {post.title}
          </div>
        ))
      }
    </div>
  )
}
