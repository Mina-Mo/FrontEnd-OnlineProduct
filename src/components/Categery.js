// componenet for rendering the categeries list

import React, {Component} from "react"

class Categery extends Component{
    render(){
        // get props
        const {Categeries,OnCategery, selectedCategery} = this.props
        return(
            <div className ="categery mx-auto" style={{width: "50%" }}>
                <ul className="list-group list-group-horizontal">
                    <li className={selectedCategery === "All Categeries" ? "list-group-item active": "list-group-item"} name="All Categeries" onClick={()=>OnCategery("All Categeries")}>All Categeries</li>
                    {Categeries.map(c=> <li key={c.id} 
                    className={c.name === selectedCategery ? "list-group-item active": "list-group-item"}
                    onClick={()=>OnCategery(c.name)}>
                    {c.name}
                    </li>)}
                 </ul>
            </div>
        )
    }
}
export default Categery;

