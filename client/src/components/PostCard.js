import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { usePosts } from '../context/postContext'

export function PostCard({post}) {

  const navigate = useNavigate()

  const { deletePost } = usePosts()

  const handleDelete = (id) => {
    toast((t) => (
      <div>
        <p className='text-white my-1'>Seguro que desea eliminar? <b>{id}</b> </p>
        <div>
          <button
            className='bg-red-500 hover:bg-red-400
            px-3 py-2 text-white rounded-sm mx-2 text-sm'
            onClick={() => {
            deletePost(id)
            toast.dismiss(t.id)
          }}
          >
            Delete
          </button>
          <button
            className='bg-slate-400 hover:bg-slate-500
            px-3 py-2 text-white rounded-sm mx-2 text-sm'
            onClick={() => toast.dismiss(t.id)}
          >
            Cancel
          </button>
        </div>
      </div>
    ),{
        style: {
          background: "#202020"
        }
      
    })
  }

  return (
    <div className="bg-zinc-800 text-white rounded-sm shadow-md shadow-blue
    hover:bg-zinc-700 hover:cursor-pointer"
      onClick={() => navigate(`/posts/${post._id}`)}
    >
      <div className="px-4 py-7">
        <div className="flex justify-between">
          <h3> {post.title} </h3>
          <button
            className="bg-red-600 text-sm px-2 py-1 rounded-sm"
            onClick={() => handleDelete(post._id)}
            >
            Delete
          </button>
        </div>
        <p> {post.description} </p>
      </div>
    </div>
  )
}
