import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:8000/api/",
    headers: {'Accept': 'application/json'}
})

export default instance