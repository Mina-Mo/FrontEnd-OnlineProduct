// component for registering the user

import React , {Component} from "react"
import Form from "../common/Form"
import Joi from "joi-browser"
import {userRegisteration} from "../Data/Users"

class Register extends Form{
    state={
        data:{
            Name: "",
            Email: "",
            Password: "",
        },
        errors:{}
    }

    // schema input validation
schema = {
        Name:Joi.string().min(4).max(30).required().label("Name"),
        Email:Joi.string().email().min(6).max(30).required(),
        Password:Joi.string().min(8).required(),
}


// handling creating new user
handleSubmit=async(e)=>{
    e.preventDefault()

    // valide the total inputs using formValidaion method
    this.formValidation()
    try{
        // send a request to the server for creating a new user
        const data = await userRegisteration(this.state.data)

        //store the token in the local store to be able to direct login the user
        localStorage.setItem("token", data.headers["x-auth-token"])

        // redirect the user to the home page
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
                <h1 className="mt-2 mb-5 ml-3">Registeration</h1>
            <form onSubmit={this.handleSubmit}>

            {/* rendering inputs using inputRender method */}
                {this.inputRender("UserName", "text", "Name", data.Name, errors)}
                {this.inputRender("Email", "email", "Email", data.Email, errors)}
                {this.inputRender("Password", "password", "Password", data.Password, errors)}
                {this.btnRender("Submit")}
            </form>
            </div>
        )
    }
}

export default Register;