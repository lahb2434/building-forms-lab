// Add BandInput component
import React, { Component } from 'react';


export default class BandInput extends Component {

  state = {
    name: ''
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state)
    this.setState({
      name: ''
    });

  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
          type="text"
          placeholder="band name" 
          value={this.state.name}
          onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}


