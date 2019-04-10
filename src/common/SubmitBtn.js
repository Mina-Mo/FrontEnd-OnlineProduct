// component for rendering button

import React from "react"

function SubmitBtn(props){
        return(
            <button type="submit" className="btn btn-primary m-3">{props.label}</button>
        )
    }

export default SubmitBtn;