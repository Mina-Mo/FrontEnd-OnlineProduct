//compnent for rendering the Page Number

import React, {Component} from "react"

class Pages extends Component{
    render(){
        //get props
        const {pageSize, currentPage, onPage, productsLength} = this.props

        // set the pages array
        const pages = []

        // getting the total pages
        const totalPages= Math.ceil(productsLength/pageSize)

        // creating the page number and push to the pages array
        for(let i=1; i<= totalPages; i++){
            pages.push(i)
        }
        return(
            <div className="ml-4">
                            <nav aria-label="Page navigation example">
            <ul className="pagination">
                {pages.map(page=> <li key ={page}
                 className={currentPage === page ? "page-item active": "page-item" } 
                 onClick={()=>onPage(page)}><a className="page-link">{page}</a></li>)}
            </ul>
          </nav>


            </div>

        )
    }
}
export default Pages;

