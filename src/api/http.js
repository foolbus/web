import axios from 'axios';

const http = axios.create({
  baseURL: process.env.REACT_APP_API_HOST,
  headers: {
    Accept: 'application/json'
  }
});

export default http;
