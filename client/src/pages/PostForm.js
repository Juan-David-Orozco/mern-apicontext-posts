import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { usePosts } from '../context/postContext'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'


export function PostForm() {

  const { createPost, getPost } = usePosts()

  const navigate = useNavigate()

  const params = useParams()

  const [post, setPost] = useState({
    title:'',
    description: ''
  })

  useEffect(() => {
    (async () => { //Funcion inmediata/ invocada
      if(params.id){
        console.log(params)
        const data = await getPost(params.id)
        console.log(data)
        setPost(data)
      }
    })();
  }, [])

  return (
    <div className='text-white flex items-center justify-center'>
      <div className='bg-zinc-800 p-10 shadow-md shadow-black'>
        <header className='flex justify-between items-center text-white py-4'>
          <h3 className='text-xl' >New Post</h3>
          <Link to="/" className='text-gray-400 text-sm hover:text-gray-300'>
            Go Back
          </Link>
        </header>
        <Formik
          //Corresponde al estado inicial
          initialValues={post}
          validationSchema={Yup.object({
            title: Yup.string().required("Titulo requerido"),
            description: Yup.string().required("Descripcion requerida")
          })}
          onSubmit={async (values, actions) => {
            await createPost(values)
            navigate('/')
          }}
          enableReinitialize
        >
          {({ handleSubmit }) => ( // Se coloca dentro de una ejecucion de funcion
            <Form onSubmit={handleSubmit}>
              <label
                htmlFor='title'
                className='text-sm block font-bold text-gray-400'
              >
                Title
              </label>
              <Field name='title' placeholder='title'
                className='my-1 px-3 py-2 focus:outline-none rounded bg-gray-600 w-full mb-4'
              />
              <ErrorMessage component="p" className='text-red-400 text-sm' name='title' />
              <label
                htmlFor='descripction'
                className='text-sm block font-bold text-gray-400'
              >
                Description
              </label>
              <Field component="textarea" name='description' placeholder='description' rows={3}
                className='my-1 px-3 py-2 focus:outline-none rounded bg-gray-600 w-full'
              />
              <ErrorMessage component="p" className='text-red-400 text-sm' name='description' />
              <button
                type="submit"
                className='bg-indigo-600 hover:bg-indigo-400 px-4 py-2
                rounded mt-2 focus:outline-none disabled:bg-indigo-300 '
              >
                Save
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}
