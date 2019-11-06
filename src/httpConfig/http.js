import axios from 'axios'
import apiURL from './api.js'

axios.defaults.timeout = 10000;   // 超时时间
axios.defaults.baseURL = apiURL;

export default axios;