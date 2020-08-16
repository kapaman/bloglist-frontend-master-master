import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/blogs/'

const postComment=async (data) => {
  const response = await axios.put(baseUrl+data.id+"/comments",{comment:data.comment} )
  return response.data

}
export default { postComment }