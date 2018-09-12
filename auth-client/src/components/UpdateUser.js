import React, { Component } from 'react';
import services from '../services';

export default class UpdateUser extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
      user: props.user
    }
  }

  componentDidMount() {
    console.log('successfully mounted a thing', this.state)
  }

  render() {
    return(
      <div className="UpdateUser">
        <h1>hihihi</h1>
      </div>
    )
  }
}

