// component for handling the errors user input

import React from "react"

function ErrorAlert(props){
 if(!props.errors)return null;
    return(
            <div className="alert alert-danger" role="alert">
                {props.errors}
            </div>
    )
}

export default ErrorAlert