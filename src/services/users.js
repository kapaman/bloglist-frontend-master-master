import axios from 'axios'
const baseUrl = 'https://bloglist-kapaman.herokuapp.com/api/users'

const getAllUsers =async () => {
  const request =await axios.get(baseUrl)
  return request.data
}



export default { getAllUsers }