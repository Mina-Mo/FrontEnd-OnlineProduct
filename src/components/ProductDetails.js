// component for rendering the item details and updating the item

import React , {Component} from "react"
import Form from "../common/Form"
import Joi from "joi-browser"
import {getProducts, amendProducts} from "../Data/Products"


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

      // input schema validation
schema={
    _id:Joi.string(),
    Name: Joi.string().min(4).max(125).label("Name"),
    Description:Joi.string().min(4).max(1024).label("Description"),
    Price: Joi.number().integer().min(5).max(100000).label("Price"),
    Categery: Joi.string().valid("Smart Phones","Laptop", "Accessories").label("Categery"),
}

async componentDidMount(){
    // getting data from server
        const {data} = await getProducts()  
        
        // getting the item id
        const _id = this.props.match.params.id

        // find the item in data
        const product = data.find(product=> product._id === _id)

        // if there is no item throw error
        if(!product)return this.props.history.replace("/NotFound")

        // getting the item details
        data._id = product._id
        data.Name = product.Name
        data.Description = product.Description
        data.Price = product.Price
        data.Categery = product.Categery

        // reset the data state by found item
        this.setState({data})
}


// handling updating item
handleSave= async(e)=>{

    // prevent the default event of submit button
    e.preventDefault()

    // clone the original data
    const originalData = {...this.state.data}
    try{

        // send a request to the server to update the item
        await amendProducts(this.state.data, this.props.user._id)

        // redirect the user to the items page
        window.location = "/"    
    }catch(error){
        // handling errors
        if(error.response.status >= 400 && error.response.status < 500){
            alert(error.response.data)
            this.setState({data: originalData})
        }
    }
}

    render(){
        const {data, errors} = this.state       
        return(
            <div className=" ml-3">
            <h1 className="mt-2 mb-5">Product</h1>
        <form onSubmit={this.handleSave}>

        {/* rending inputs using inputRender method */}
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