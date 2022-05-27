import axios from 'axios'

export const getPostsRequests = async () => {
  return await axios.get('/posts')
}

export const createPostRequest = async (post) => {
  return await axios.post('/posts', post)
}

export const deletePostRequest = async (postId) => {
  return await axios.delete(`/posts/${postId}`)
}
