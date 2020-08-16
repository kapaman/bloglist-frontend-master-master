import axios from 'axios'
const baseUrl = 'https://bloglist-kapaman.herokuapp.com/api/blogs/'

const postComment=async (data) => {
  const response = await axios.put(baseUrl+data.id+"/comments",{comment:data.comment} )
  return response.data

}
export default { postComment }
