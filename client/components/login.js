import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signupUsername: '',
      signupPassword: '',
      isAdmin: false,
      loginUsername: '',
      loginPassword: ''
    };
  }

  handleChange(param, event) {
    event.preventDefault();
    this.setState({[param]: event.target.value});
  }

  toggleCheckbox(event) {
    this.setState({isAdmin: !this.state.isAdmin});
  }

  signupUser(event) {
    event.preventDefault();
    if (this.state.signupUsername && this.state.signupPassword) {
      const user = {
        username: this.state.signupUsername,
        password: this.state.signupPassword,
        isAdmin: this.state.isAdmin
      };
      this.props.signupUser(user);
    }
  }

  loginUser(event) {
    event.preventDefault();
    if (this.state.loginUsername && this.state.loginPassword) {
      const user = {
        username: this.state.loginUsername,
        password: this.state.loginPassword
      };
      this.props.loginUser(user);
    }
  }

  render() {
    return (
      <div>
        <div id='signup'>
          <h2>Sign Up:</h2>
          <b>Username:</b>
          <input id='signupUsername' type='text' onChange={
            this.handleChange.bind(this, 'signupUsername')
          } />
          <br />
          <b>Password:</b>
          <input id='signupPassword' type='text' onChange={
            this.handleChange.bind(this, 'signupPassword')
          } />
          <br />
          <b>Admin?</b>
          <input id='isAdmin' type='checkbox' checked={
            this.state.isAdmin
          } onClick={this.toggleCheckbox.bind(this)} />
          <button id='signupButton' onClick={
            this.signupUser.bind(this)
          }>Create User</button>
        </div>
        <div id='login'>
          <h2>Log In:</h2>
          <b>Username:</b>
          <input id='loginUsername' type='text' onChange={
            this.handleChange.bind(this, 'loginUsername')
          } />
          <br />
          <b>Password:</b>
          <input id='loginPassword' type='text' onChange={
            this.handleChange.bind(this, 'loginPassword')
          } />
          <br />
          <button id='loginButton' onClick={
            this.loginUser.bind(this)
          }>Login</button>
        </div>
      </div>
    );
  }
}

export default Login