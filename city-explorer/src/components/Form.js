import React from 'react';

class Form extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: null
    }
  }
  //TODO: render dynamic amount of inputs using a setup prop object
  render(){
    return (
      <React.Fragment>

        <input onChange={e => this.setState({ data: e.target.value })}></input>

        <button onClick={() => this.props.onClick(this.state.data)}>{this.props.formName}</button>
      </React.Fragment>
    )
  }
}

export default Form;