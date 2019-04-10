// service module

import axios from "axios"
import {setJwt} from "../Data/Users"

axios.defaults.baseURL = process.env.REACT_APP_API_URL

// to intercept the unexpected errors
axios.interceptors.response.use(null, error=>{
    if(!error.response.status >= 400 && error.response.status < 500){
        alert("Somethig failed!")
    }
    return Promise.reject(error)
})

// getting the access token from the local Storage
export function getjwt(){
    return localStorage.getItem("token")
}

// set access token header
setJwt(getjwt())

export default{
    get: axios.get,
    post:axios.post,
    put: axios.put,
    delete: axios.delete
}