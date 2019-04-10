//component for rendering the navbar

import React , {Component} from "react"
import {NavLink} from "react-router-dom"

class NavBar extends Component{
    
    render(){
        
        // getting the current user to manage his premissions
        const {user} = this.props
        return(
            <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                <h5 className="my-0 mr-md-auto font-weight-normal"><NavLink to="/" style={{textDecoration: "none", color: "black"}}>Online Product World</NavLink></h5>
                <nav className="my-2 my-md-0 mr-md-3">
                    <NavLink className="p-2 text-dark" to="/">Home</NavLink>
                    {(user) ? <NavLink className="p-2 text-dark" to="/Product/new">New Product</NavLink>:null}
                        {(user) ? <NavLink className="p-2 text-dark" to="/me">{user.Name}</NavLink>: null}
                        {(user) ?  <NavLink className="p-2 text-dark" to="/LogOut">LogOut</NavLink> : null}
                                  
                   {(user) ? null:<NavLink className="p-2 text-dark" to="/Login">Login</NavLink>}
                    {(user) ? null:<NavLink className="p-2 text-dark" to="/Register">Registeration</NavLink>}
                    
                </nav>
          </div>

        )
    }
}

export default NavBar;