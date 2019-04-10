// component for rendering all deck cards

import React , {Component} from "react"
import Card from "./Card"

class Cards extends Component{

    render(){
        // get props
        const {onDelete, data, selectedCategery, pageSize, currentPage, onPage} = this.props
        return(
                <Card onDelete={onDelete} data={data} selectedCategery={selectedCategery}
                    pageSize={pageSize} currentPage={currentPage} onPage={onPage} />

        )
    }
}

export default Cards;