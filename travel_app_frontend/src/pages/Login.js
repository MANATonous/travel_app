import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props)
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


  }

  render() {
    return (
      <div>
        <form>
          <label className="email" name="email">Email</label>
          <input className="email"
            name="email"
            value=""
            onChange={this.handleChange.bind(this)}
            placeholder="Email"
            type="email"
          />
          <label name="password">Password</label>
          <input className="password"
            name="password"
            value=""
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
      </div>
    )
  }
}

export default Login
