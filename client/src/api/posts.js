import axios from 'axios'

export const getPostsRequests = async () => {
  return await axios.get('/posts')
}

export const getPostRequest = async (postId) => {
  return await axios.get(`/posts/${postId}`)
}

export const createPostRequest = async (post) => {
  const form = new FormData()
  for (let key in post) {
    form.append(key, post[key])
  }
  return await axios.post('/posts', form, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  })
}

export const deletePostRequest = async (postId) => {
  return await axios.delete(`/posts/${postId}`)
}

export const updatePostRequest = async (postId, newFields) => {
  const form = new FormData()
  for (let key in newFields) {
    form.append(key, newFields[key])
  }
  return await axios.put(`/posts/${postId}`, form, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  })
}