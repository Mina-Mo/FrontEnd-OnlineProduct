// componenet for rendering the categeries list

import React, {Component} from "react"

class Categery extends Component{
    render(){
        // get props
        const {Categeries,OnCategery, selectedCategery} = this.props
        return(
            <div className ="categery">
                <ul className="list-group list-group-horizontal row mx-auto" style={{width:"100%"}}>
                    <li className={selectedCategery === "All Categeries" ? "list-group-item active col-md-2 offset-md-2": "list-group-item col-md-2 offset-md-2"} name="All Categeries" onClick={()=>OnCategery("All Categeries")}>All Categeries</li>
                    {Categeries.map(c=> <li key={c.id} 
                    className={c.name === selectedCategery ? "list-group-item active col-md-2": "list-group-item col-md-2"}
                    onClick={()=>OnCategery(c.name)}>
                    {c.name}
                    </li>)}
                 </ul>
            </div>
        )
    }
}
export default Categery;

