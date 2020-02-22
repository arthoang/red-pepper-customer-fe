import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001/api/'
});

// for debugging
// instance.interceptors.request.use(function (config) {
//     console.log(config)
//     return config
//   }, function (error) {
//     return Promise.reject(error)
//   })

export default instance;