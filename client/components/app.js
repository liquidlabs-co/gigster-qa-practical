import React from 'react';
import Dashboard from './dashboard.js';
import Login from './login.js';
import {auth, create, login, logout} from '../api/user.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {isLoggedIn: false};
  }

  componentWillMount() {
    auth()
      .then(j => {
        this.setState({isLoggedIn: true});
      })
      .catch(err => console.log(err));
  }

  // not handling errors for now
  // should give user feedback in the login component
  createUser(user) {
    create(user).then(j => {
      if (!j.err) {
        this.setState({isLoggedIn: true});
      } else {
        console.log(j.err);
      }
    });
  }

  loginUser(user) {
    login(user).then(j => {
      if (!j.err) {
        this.setState({isLoggedIn: true});
      } else {
        console.log(j.err);
      }
    });
  }

  logoutUser() {
    logout().then(() => {
      this.setState({isLoggedIn: false});
    });
  }

  render() {
    if (this.state.isLoggedIn) {
      return <Dashboard logout={this.logoutUser.bind(this)} />;
    } else {
      return <Login signupUser={this.createUser.bind(this)} loginUser={
        this.loginUser.bind(this)
      } />;
    }
  }
}

export default App