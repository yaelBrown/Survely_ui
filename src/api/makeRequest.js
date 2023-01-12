import axios from 'axios'

const API_VER = "v1"
const BASE_URL = "http://localhost:3001"

export default function makeRequest(path, payload=null, method="GET") {
  const config = {
    url: BASE_URL + path,
    method,
  }
  
  return axios.request(config)
}