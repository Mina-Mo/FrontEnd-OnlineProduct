import React, { Component } from 'react';
import {Route, Switch, Redirect} from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login"
import Register from "./components/Register"
import NavBar from "./components/NavBar"
import LogOut from "./components/LogOut"
import ProductDetails from "./components/ProductDetails"
import New from "./components/New"
import Me from "./components/Me"
import NotFound from "./components/NotFound"
import {getUser} from "./Data/Users"
import './App.css';



class App extends Component {
  state={
    isLoaded: false
  }

  async componentDidMount(){
   try{
     // getting current user
      this.setState({user: await getUser()})

      // loading the component
      this.setState({isLoaded: true})

    }catch(ex){
      this.setState({isLoaded: true})
    }
  }

  render() {
    if(this.state.isLoaded === false) return <p className="m-2">Loading...</p>
    return (
      <React.Fragment>
      <NavBar user={this.state.user}/>
      <div>
        <Switch>
           <Route path="/Product/new" render={(props)=><New user={this.state.user}/>}/>
          <Route path="/Product/:id" render={(props)=><ProductDetails user={this.state.user} {...props}/>}/>
          <Route path="/Me" component={Me}/>
          <Route path="/LogOut" component={LogOut}/>
          <Route path="/Register" component={Register}/>
          <Route path="/Login" component={Login}/>
          <Route path="/"  exact component={Home}/>
          <Route path="/NotFound"  component={NotFound}/>
          <Redirect to="/NotFound"/>
        </Switch>
        </div>
        </React.Fragment>
    )   
  }
}

export default App;
