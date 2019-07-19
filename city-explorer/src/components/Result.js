import React, { Component, Fragment } from "react";

import "../App.css";



class Result extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }


render() {
  return (
    <Fragment>
    <section>
      <h3>Results from the Dark Sky API</h3>
      <p>TBD</p>
      <ul class="weather-results">
        <li>get it from api</li>
      </ul>
      </section>
    </Fragment>
  );
}
}

  

export default Result;