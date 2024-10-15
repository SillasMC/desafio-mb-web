import axios from 'axios';

const axiosApi = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 15000,
});

export default axiosApi