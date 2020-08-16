import axios from 'axios'
const baseUrl = 'https://bloglist-kapaman.herokuapp.com/api/login'

const login=async (data) => {
  const response = await axios.post(baseUrl,{ username:data.username,password:data.password })
  return response.data

}
export default { login }