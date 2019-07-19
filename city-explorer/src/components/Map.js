import React, { Component, Fragment } from "react";




class Map extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
 


render() { 
  const key = localStorage.getItem("STATIC_MAP_API_KEY")
  return (
    <Fragment>
     <img src= {`https://maps.googleapis.com/maps/api/staticmap?center=${this.props.location.latitude}%2c%20${this.props.location.longitude}&zoom=13&size=600x300&maptype=roadmap
&key=${key}`}
        alt="" />
       
    </Fragment>
  );
}
}
  

export default Map;