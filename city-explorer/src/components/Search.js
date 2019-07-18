import React, { Component, Fragment } from "react";

import "../App.css";

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }


  render() {
    return (
      <Fragment>
        <form onSubmit = {this.props.button}>
          <label for="search">Search for a location</label>
          <input type="text" name="search" id="input-search" placeholder="Enter a location here" onChange = {this.props.handle}/>
          <button type="submit" >Explore!</button>
        </form>
      </Fragment>
    )
  }
}


export default SearchForm;