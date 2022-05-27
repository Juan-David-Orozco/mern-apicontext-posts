import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { usePosts } from '../context/postContext'
import { useNavigate } from 'react-router-dom'


export function PostForm() {

  const { createPost } = usePosts()

  const navigate = useNavigate()

  return (
    <div>
      <Formik
        initialValues={{ //Corresponde al estado inicial
          title: '',
          description: ''
        }}
        validationSchema={Yup.object({
          title: Yup.string().required("Titulo requerido"),
          description: Yup.string().required("Descripcion requerida")
        })}
        onSubmit={async (values, actions) => {
          await createPost(values)
          navigate('/')
        }}
      >
        {({ handleSubmit }) => ( // Se coloca dentro de una ejecucion de funcion
          <Form onSubmit={handleSubmit}>
            <Field name='title' placeholder='title'
              className='my-1 px-3 py-2 focus:outline-none rounded bg-gray-600 w-full'
            />
            <ErrorMessage component="p" className='text-red-400 text-sm' name='title' />
            <Field name='description' placeholder='description' 
              className='my-1 px-3 py-2 focus:outline-none rounded bg-gray-600 w-full'
            />
            <ErrorMessage component="p" className='text-red-400 text-sm' name='description' />
            <button type="submit">Save</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
