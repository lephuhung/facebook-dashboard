import axios from 'axios';

const axiosInstance = axios.create({
    baseURL:'https://eurowindows.educationhost.cloud/api',
    withCredentials:true,

});
export default axiosInstance;