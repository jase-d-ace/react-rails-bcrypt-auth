import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from './components/Auth';

class App extends Component {
  state = {
    userDataLoaded: false,
    userData: null
  }

  constructor(props, context) {
    super(props, context);
    this.receiveUser = this.receiveUser.bind(this);
  }

  receiveUser(user) {
    this.setState({
      userDataLoaded: true,
      userData: user
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>{this.state.userDataLoaded ? `Welcome, ${this.state.userData.name}` : 'Please Log In!' }</h1>
        <Auth receiveUser={this.receiveUser}/>
      </div>
    );
  }
}

export default App;
