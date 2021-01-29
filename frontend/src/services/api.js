import axios from 'axios';

const api = axios.create({
  baseURL: 'htp://localhost:3333'
})

export default api;
