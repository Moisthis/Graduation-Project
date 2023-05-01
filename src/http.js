import Axios from "axios";
const httptool = Axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
}) 
export default httptool;