import React, { Component } from 'react';
import AuthService from '../services/AuthService';
import Register from './Register'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props)
    this.Auth = new AuthService()
    this.state = {
      email: '',
      password: '',
      apiUrl: 'http://localhost:3000'
    }
  }

  //update state based on user input in form
  handleChange(e) {
    this.setState({ [e.target.name] : e.target.value })
  }

  userCredSubmit(e){
    e.preventDefault()
    this.Auth.login(this.state.email,this.state.password)
    .then(res =>{
      this.props.history.replace('/')
    })
    .catch(err =>{ alert(err) })
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.userCredSubmit.bind(this)}
        >
          <label className="email" name="email">Email</label>
          <input className="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange.bind(this)}
            placeholder="Email"
            type="email"
          />
          <label name="password">Password</label>
          <input className="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange.bind(this)}
            placeholder="Password"
            type="password"
          />
          <input
              type="submit"
              value="Log In"
              name="submit"
          />
        </form>
        <Link
          to={`/Register`}
          activeClassName='active'
        >
          <small className='subtitle'>Not Registered?</small>
        </Link>
      </div>
    )
  }
}

export default Login
