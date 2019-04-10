// all user server requests

import axios from "axios";
import jwtDecode from "jwt-decode"
import http from "../Service/http"

// creating new user
export function userRegisteration(user){
return http.post("/users/signIn", {
    Name: user.Name,
    Email: user.Email,
    Password: user.Password
})
}

// login 
export function userLogin(Email, Password){
   return http.post("/users/logIn", {Email,Password})
}

// getting user data from the stored accessToken
export function getUser(){
    const jwt = localStorage.getItem("token")
    const user = jwtDecode(jwt)
    return user
}

// getting user profile
export function getProfile(){
   return http.get("/users/me")
}

// set a common header for all routes
export function setJwt(jwt) {
    axios.defaults.headers.common["x-auth-token"] = jwt;
  }