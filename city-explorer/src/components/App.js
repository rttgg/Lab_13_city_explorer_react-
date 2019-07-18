import React, { Component, Fragment } from "react";

import Main from "./Main.js";
import Header from "./Header.js";

import "../App.css";


class App extends Component {
  constructor(props){
    super(props);

    this.state = {};    
    
  }
  
 render() {
   return (
     <Fragment>
        <Header />
        <Main />
          
     </Fragment>
   )
 }
}

export default App;