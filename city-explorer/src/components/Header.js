import React, { Component, Fragment } from "react";

import "../App.css";

 

class Header extends Component {
  constructor(props){
    super(props);

    this.state =  {};
  }
  
 render() {
   return (
     <Fragment>
       
          <h1>City Explorer</h1>
          <p>Enter a location below to learn abut the weather, events, restaurants, movies filmed there, and more!
          </p>
      
        
     </Fragment>
   );
 }
}


export default Header;
