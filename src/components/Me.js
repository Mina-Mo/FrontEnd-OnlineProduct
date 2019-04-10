// component to get the user profile

import React , {Component} from "react"
import {getProfile} from "../Data/Users"
import {Link} from "react-router-dom"
import {deleteProduct} from "../Data/Products"

class Me extends Component{
    state = {
        isloading: false
    }
    

    // getting the user profile
async componentDidMount(){
    try{
        //sending request to the server
        const user = await getProfile()
        // reset the state
        this.setState({user:user.data}) 

        // reset the loading state to true to allow the page to render
        this.setState({isloading: true}) 
    }catch(error){
        this.setState({isloading: true}) 
    }
}

// handling remove item
handleDeleteBtn= async(product)=>{

    // clone the original data
    const originalData = {...this.state.data}
    try{
        // sending a request to the server to delete the item
        await deleteProduct(product)
        // reload the page
        window.location.reload()    
    }catch(error){

        // handling the errors
        if(error.response.status >= 400 && error.response.status < 500){
            alert(error.response.data)
        }
    }
}

    render(){
        if(this.state.isloading === false)return <p>Loading...></p>;
        const {user} = this.state
        return(
            <React.Fragment>
                <div className="jumbotron">
                    <div className="container">
                    <h1 className="display-3">Hello, {user.Name}!</h1>
                    <p>Welcome to The Online Product World, where you will find everything you need related by laptops and mobiles hardwares.</p>
                    </div>
                </div>
                {(user.CreatedItems.length === 0) ? <p className="ml-3">There are no products yet!!!</p>:
                <div className="container">
                <div className="row">
                {user.CreatedItems.map(item=>
                    <div className="col-md-4">
                    <h2>{item.Name}</h2>
                    <p>{item.Price} U$D</p>
                    <p>{item.Description}</p>
                    <button className="btn btn-secondary mb-2" onClick={()=>this.handleDeleteBtn(item)}>Delete</button>
                    <p><Link className="btn btn-secondary" to={`/Product/${item._id}`} role="button">View details »</Link></p>
                     </div>
                    )}
                
                </div>
            </div>}

            </React.Fragment>
        )
    }
}

export default Me;