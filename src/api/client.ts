import axios from 'axios'
import { API_KEY } from '@env'

const client = axios.create({
  baseURL: 'http://api.weatherapi.com/v1',
  params: {
    key: API_KEY
  },
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' }
})

export default client
