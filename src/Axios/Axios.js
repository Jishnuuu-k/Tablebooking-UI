import axios from "axios"

const instance = axios.create({
    baseURL:'https://tablebooking-fcz6.onrender.com',
    
});
export default instance