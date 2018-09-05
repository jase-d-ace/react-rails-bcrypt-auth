import React, { Component } from 'react';
import services from '../services';

class Auth extends Component {
  state = {
    name: '',
    password: ''
  }

  constructor(props, context) {
    super(props, context);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleInputChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    })
  };

  handleFormSubmit(e) {
    e.preventDefault();
    services.authenticate('/login', this.state)
    .then( res => res.json() )
    .then( data => {
      console.log('data!', data)
    })
    .catch( err => {
      console.log('nooo', err)
    })
    e.target.reset();
    this.props.receiveUser(this.state);
  }
  render() {
    return (
      <div className="Auth">
        <form onSubmit={this.handleFormSubmit}>
        <input type="text" name="name" onChange={this.handleInputChange} placeholder="name" />
        <input type="text" name="password" onChange={this.handleInputChange} placeholder="password" />
        <input type="submit" value="do some rails stuff!" />
      </form>
      </div>
    )
  }
}

export default Auth;
