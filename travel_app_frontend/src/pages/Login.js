import React, { Component } from 'react';
import AuthService from '../services/AuthService';
import Register from './Register'
import { nav, Button, Col, Form, FormGroup, Label,Input, Row, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../css/Login.css';
import '../css/Register.css';

class Login extends Component {
  constructor(props) {
    super(props)
    this.Auth = new AuthService()
    this.state = {
      email: '',
      password: '',
      apiUrl: 'http://localhost:3000',
      modal: false,
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
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
          <a className="navbar-brand" href="#"><h1>Trippin Out</h1></a>
          <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor03"
          aria-controls="navbarColor03"
          aria-expanded="false"
          aria-label="Toggle navigation"
          >
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
        <div className="loginform">
          <form onSubmit={this.userCredSubmit.bind(this)}>
            <FormGroup row>
              <Label for="email" hidden sm={3}>Email</Label>
              <Col sm={5}>
                <Input className= "form-item" type="email" name="email" id="email" placeholder="Email" value= {this.state.email}
                onChange={this.handleChange.bind(this)}/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="password" hidden sm={3}>Password</Label>
              <Col sm={5}>
                <Input className= "form-item" type="password" name="password" id="password" placeholder="Password" value= {this.state.password}
                onChange={this.handleChange.bind(this)} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="loginbutton"></Label>
              <Col>
                <input
                  type="submit"
                  value="Log In"
                  name="submit"
                  className="btn btn-primary btn-lg form-submit"
                />
              </Col>
            </FormGroup>
            <Button id="registerbutton" className="btn btn-primary btn-lg form-submit" onClick={this.toggle}> Not Registered? </Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>Start Trippin Out!</ModalHeader>
              <ModalBody>
                <Register toggleModal={this.toggle}/>
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
            </Modal>
          </form>
        </div>
      </div>
      );
    }
  }

export default Login
