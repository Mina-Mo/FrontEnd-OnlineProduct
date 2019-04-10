// component gathering all Home component page

import React , {Component} from "react"
import Cards from "./Cards"
import Categery from"./Categery"
import Welcome from"./Welcome"
import {getProducts, getCategery, deleteProduct} from "../Data/Products"

class Home extends Component{

    state={
        isloaded: false,
        data:[]
        ,
        Categeries: getCategery()
        ,
        user:{
            Name:"",
            Email: "",
            Password: "",
            CreatedItems: []
        },
        selectedCategery: "All Categeries",
        currentPage : 1,
        pageSize: 4        
    }

    // geting data from server
   async componentDidMount(){
       try{
        const {data}= await getProducts()
        this.setState({data})
        this.setState({isloaded: true})

       }catch(error){
        this.setState({isloaded: true})
       }
    }

    // handling the selected categery 
    handleCategery=(Categery)=>{
        this.setState({selectedCategery: Categery})
        this.setState({currentPage: 1})
    }

// handling the selected page
    handlePage=(page)=>{
        this.setState({currentPage: page})
    }

    render(){
        if(this.state.isloaded=== false)return <p>Loading...</p>
        const {data, Categeries, selectedCategery, pageSize, currentPage} = this.state 
        return(
            <React.Fragment>
                <Welcome/>
                <div className="container">
                    <Categery Categeries={Categeries} OnCategery={this.handleCategery} selectedCategery={selectedCategery}/>
                    <Cards onDelete={this.handleDeleteBtn} 
                    data={data} 
                    selectedCategery={selectedCategery}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPage={this.handlePage}
                    />
                </div>
            </React.Fragment>
        )
    }
}

export default Home;