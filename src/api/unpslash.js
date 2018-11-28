
import axios from 'axios';

const API_KEY = '82cece643cde12e994e97d7b7e32aac5cc91b04cc0bf78aeff614f916d558e42';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${API_KEY}`
  }
})