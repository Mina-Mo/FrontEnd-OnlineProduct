// component for logging the user out

import React , {Component} from "react"

class LogOut extends Component{

   componentDidMount(){

    // remove the access token from the local storage
       localStorage.removeItem("token")

       // reload the page or redirect the user to the homepage
       window.location = "/"
   }
   render(){
       return null;
   }
}

export default LogOut;