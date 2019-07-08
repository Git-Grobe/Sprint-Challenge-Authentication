import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3300/api',
    // headers: {
    //     authorization: localStorage.getItem('token'),
    // },
})


// set token to localStorage so you dont have to reload page to get token
instance.interceptors.request.use(
    (config) => {
        config.headers.authorization = localStorage.getItem('token');
        return config
    },
    (err) => {

        return Promise.reject(err);
    }
)

export default instance;