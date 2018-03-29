import React, { Component } from 'react';
import AuthService from '../services/AuthService';
import Register from './Register'
import { nav, modal, Card, CardImg, CardDeck, CardText, CardBody, CardTitle, CardSubtitle, Button, Col, Form, FormGroup, Label,Input, Row} from 'reactstrap'
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
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Trippin Out</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
          </ul>
        </div>
      </nav>
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
