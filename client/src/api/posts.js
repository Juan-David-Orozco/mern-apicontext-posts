import axios from 'axios'

export const getPostsRequests = async () => {
  return await axios.get('/posts')
}