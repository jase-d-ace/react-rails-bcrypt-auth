import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from './components/Auth';
import UpdateUser from './components/UpdateUser';
import services from './services'

class App extends Component {
  state = {
    userDataLoaded: false,
    userData: null
  }

  constructor(props, context) {
    super(props, context);
    this.receiveUser = this.receiveUser.bind(this);
    this.logout = this.logout.bind(this)
  }

  receiveUser(user) {
    this.setState({
      userDataLoaded: true,
      userData: user
    })
  }

  logout() {
    services.logout(this.state.userData.name)
    .then(data => data.json())
    .then( res => {
      this.setState({
        userDataLoaded: false,
        userData: null
      })
    })
    .catch( err => {
      console.log('noo!', err)
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
        {this.state.userDataLoaded ? <button onClick={this.logout}>Log out!</button> : ''}
        <Auth receiveUser={this.receiveUser}/>
        {this.state.userDataLoaded ? <UpdateUser user={this.state.userData} /> : ''}
      </div>
    );
  }
}

export default App;
