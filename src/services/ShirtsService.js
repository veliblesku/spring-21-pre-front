import axios from 'axios'
const baseUrl = 'http://localhost:3002/api/shirts'

const getAllShirts = () => {
  const request = axios.get(baseUrl)
  console.log(request.then(response => response.data))
  return request.then(response => response.data)
}


export default { getAllShirts }