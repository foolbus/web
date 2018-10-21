import http from './http';

export const postData = (params) => {
  return http.post('/data',params)
    .then(response => response.data)
    .catch(err => {console.log('/data called failed')});
}
