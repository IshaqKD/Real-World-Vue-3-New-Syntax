import axios from 'axios'

const apiClient = axios.create({
  baseURL: '.',
  withCredentials: false,
  headers: {
    Accept: 'Application/json',
    'Content-Type': 'Application/json',
  },
})

export default {
  getEvents() {
    return apiClient.get('/db.json')
  }
}
