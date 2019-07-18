import React, { Component, Fragment } from "react";


import "../App.css";

class Map extends Component {
  constructor(props){
    super(props);

    this.state = {};
  }
 
//url = `https://maps.googleapis.com/maps/api/staticmap?center=${this.props.search.latitude}%2c%20${this.props.search.longitude}&zoom=13&size=600x300&maptype=roadmap&key=${""}`

render() { 
  console.log(this.props.search);
  return (
    <Fragment>
     <img src= {`https://maps.googleapis.com/maps/api/staticmap?center=${this.props.search.latitude}%2c%20${this.props.search.longitude}&zoom=13&size=600x300&maptype=roadmap
&key=${""}`}
        alt="" />
       
    </Fragment>
  );
}
}

  

export default Map;