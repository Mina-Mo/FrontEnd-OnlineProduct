// component for handling all forms

import React , {Component} from "react"
import Joi from "joi-browser"
import Input from "./Input"
import SubmitBtn from "./SubmitBtn"

class Form extends Component{
    state = {
        data:{},
        errors:{}

    }
// to validate the total user inputs 
    formValidation=()=>{

        // clone errors state
        const errors={...errors}

        // validate the inputs using joi-browser
        const validation = Joi.validate(this.state.data, this.schema, {abortEarly: false}) 
        if(validation.error){
            const errs = validation.error.details
            for (let i of errs){
                errors[i.path] = i.message
            }

            // reset the errors state
             this.setState({errors})
        }
    }

    // validate each input in the form
    properityValidation=(name, value)=>{

        // creating object from the input to be able to use it with joi validation
        const obj = {[name]: value}

        // validate the input using joi-browser
        const validation = Joi.validate(obj, {[name]: this.schema[name]})
        const errors={}
        if(validation.error){
            errors[name] = validation.error.details[0].message
         }   
         // reset the errors state
         this.setState({errors})
}

// handle the onChange input
    handleChange= (e)=>{
        
        // clone data state
        const data = {...this.state.data}

        // get the current target
        const input = e.currentTarget

       // set the current target value
        data[input.name] = input.value

        // reset the state
        this.setState({data})

        // calling properityValidation methode to validate the input
        this.properityValidation(input.name, input.value)
        }

// method for rendering an input component
    inputRender=(label, type= "text", name, value, errors)=>{
        console.log(name)
        return(
            <Input label={label}
            type={type}
            name={name}
            value={value}
            onChange={this.handleChange}
            errors={errors[name]}/>
        )
    }    

    // method for rendering an button component
    btnRender=(label)=>{
        return(
            <SubmitBtn label={label}/>
        )
    }

}
export default Form;