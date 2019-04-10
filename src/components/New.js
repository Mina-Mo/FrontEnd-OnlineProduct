//component for creating new item

import React , {Component} from "react"
import Form from "../common/Form"
import Joi from "joi-browser"
import {amendProducts} from "../Data/Products"


class ProdustDetails extends Form{
    state={
        data: {
                _id:"",
                Name:"",
                Description:"",
                Price:"",
                Categery:"",
            },
            errors:{}
      }

      // schema input validation
schema={
    _id:Joi.string(),
    Name: Joi.string().min(4).max(125).label("Name"),
    Description:Joi.string().min(4).max(1024).label("Description"),
    Price: Joi.number().integer().min(5).max(100000).label("Price"),
    Categery: Joi.string().valid("Smart Phones","Laptop", "Accessories").label("Categery"),
}

//handling the item saving
handleSave= async(e)=>{
    // prvent the default event of submit button
    e.preventDefault()
    try{
        //send a request to the server by the new item
        await amendProducts(this.state.data, this.props.user._id)

        // redirect the user to the items
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
            <h1 className="mt-2 mb-5">Product</h1>
        <form onSubmit={this.handleSave}>

         {/* rendering inputs using inputRender method */}
            {this.inputRender("Product name", "text", "Name", data.Name, errors)}
            {this.inputRender("Description", "text", "Description", data.Description, errors)}
            {this.inputRender("Price", "text", "Price", data.Price, errors)}
            {this.inputRender("Categery", "text", "Categery", data.Categery, errors)}
            {this.btnRender("Save")}
        </form>
        </div>
        )
    }
}

export default ProdustDetails;