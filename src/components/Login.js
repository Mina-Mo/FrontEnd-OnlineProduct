import React , {Component} from "react"
import Form from  "../common/Form"
import Joi from "joi-browser"
import {userLogin} from "../Data/Users"

class Login extends Form{
state={
    data:{Email:"", 
            Password: ""},

    errors:{}
}

// input schema validation
schema = {
    Email:Joi.string().email().min(6).max(30).required(),
    Password:Joi.string().min(8).required(),
}

// handling submit the user login
handleSubmit=async (e)=>{
    e.preventDefault()

    // validate the form using formValidation method
    this.formValidation()
    try{
        // sending a login request to the server
        const {data : jwt}= await userLogin(this.state.data.Email, this.state.data.Password)

        // store the access token in local storage
        localStorage.setItem("token", jwt)

        // redirect the user to the homepage
        window.location = "/"
    }catch(error){

        // handling the errors
        if(error.response.status >=400 && error.response.status < 500){
            alert(error.response.data)
    }
}

}
    render(){
        const {data, errors} = this.state
        return(
            <div className=" ml-3">
                <h1 className="mt-2 mb-5">Log In</h1>
            <form onSubmit={this.handleSubmit}>
                {this.inputRender("Email", "text", "Email", data.Email, errors)}
                {this.inputRender("Password", "password", "Password", data.Password, errors)}
                {this.btnRender("Submit")}
            </form>
            </div>
        )
    }
}

export default Login;