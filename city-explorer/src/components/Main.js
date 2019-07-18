import React, { Component, Fragment } from "react";
//import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Search from "./Search.js";
import Result from "./Result.js";
import Map from "./Map.js";
import superagent from "superagent";

import '../App.css';

class Main extends Component {
  constructor(props){
    super(props);

    this.state = {inputText: "",
    location: {}
    
    };
  }
  handle = event => {
    this.setState({inputText: event.target.value})
    
  }
  search = event => {
    event.preventDefault()
    superagent.get("https://city-explorer-backend.herokuapp.com/location").query({data : this.state.inputText}).then(response => {
      this.setState({location: response.body})
      console.log(this.state)
    })
  }



render() {
  return (
    <BrowserRouter>
    
      <Search handle={ this.handle } button={ this.search }/>
      <Map search={ this.state.location }/>
      <Result />
      <Result />
      <Result />
      <Result />
      <Result />
       
    </BrowserRouter>
  );
}
}

  

export default Main;