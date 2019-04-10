//component to render an input

import React , {Component} from "react"
import ErrorAlert from "./ErrorAlert"

class Input extends Component{

    render(){
        const{label,type, name, value, onChange}= this.props
        return(
            <div className="form-group col-5">
                <label>{label}</label>
                <input type={type} className="form-control" 
                name={name}
                value={value}
                onChange={onChange}/>
                 <ErrorAlert errors={this.props.errors}/>

            </div>
        )
    }
}

export default Input;