import axios from 'axios'
const baseUrl = 'http://localhost:3002/api/jackets'

const getAllJackets = () => {
  const request = axios.get(baseUrl)
  //
  //return request.then(response => response.data)
  console.log(request.then(response => response.data))
  return request.then(response => response.data)
}


export default { getAllJackets }