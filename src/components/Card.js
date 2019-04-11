// component for rendering deck card 

import React , {Component} from "react"
import {NavLink} from "react-router-dom"
import Pages from "./Pages"
import {pagination} from "../common/Pagination"
import {getUser} from "../Data/Users"

class Card extends Component{
  state={
    isLoaded: false
  }

  componentDidMount(){
    try{
      const user = getUser()
      this.setState({user})
      this.setState({isLoaded: true})
  
    }catch(error){
      this.setState({isLoaded: true})
    }
  }
 
    render(){
      if(this.state.isLoaded === false) return <p>Loading...</p>
      // get props
        const{data, currentPage, pageSize, selectedCategery, onPage} =this.props
        const {user} = this.state
        let products;
        let selectedProducts;

        // get the selected categery items
        if(selectedCategery !== "All Categeries"){
          selectedProducts = data.filter(product=> product.Categery === selectedCategery)
        }else if(selectedCategery=== "All Categeries"){
          selectedProducts = data
        }
        // get the an array of the current page
         products = pagination(selectedProducts, currentPage, pageSize)
        return(
          <React.Fragment>
            <div className="card-deck mb-3 text-center mt-4 row ">
            
            {products.map(product=>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 ">
                  <div key={product._id} className="card mb-4 shadow-sm">
              <div className="card-header">
              {(user) ? <NavLink to={`/Product/${product._id}`} >{product.Name}</NavLink>: <h5>{product.Name}</h5>}
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">{product.Price} <small className="text-muted">U$D</small></h1>
                <ul className="list-unstyled mt-0 mb-0">
                  <li>{product.Description}</li>
                  <li>Selling by: {product.SellingBy.Name}</li>
                </ul>           
              </div>  
            </div>
            </div>
                  )}
              </div>
               <Pages data={data} 
                  pageSize={pageSize} 
                  currentPage={currentPage} 
                  onPage={this.handlePage}
                  productsLength={selectedProducts.length}
                  onPage={onPage} 
                  />

</React.Fragment>
        
            
        )
    }
}

export default Card;