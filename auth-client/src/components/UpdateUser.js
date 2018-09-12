import React, { Component } from 'react';
import services from '../services';

export default class UpdateUser extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
      user: props.user,
      old_password: '',
      password: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidMount() {
    console.log('successfully mounted a thing', this.state)
  }

  handleInputChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name] : value
    })
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let {user, old_password, password} = this.state;
    services.updateInformation(user, old_password, password)
    .then( data => data.json())
    .then( res => {
      console.log('successfully updated a thing!', res)
    })
    .catch( err => {
      console.log('unsuccessfully updated a thing', err)
    })
    e.target.reset()
  }

  render() {
    return(
      <div className="UpdateUser">
        <h1>Change your password here!</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input type="password" name="old_password" onChange={this.handleInputChange} placeholder="old password" />
          <input type="password" name="password" onChange={this.handleInputChange} placeholder="new password" />
          <input type="submit" value="changeyour password" />
        </form>
      </div>
    )
  }
}

