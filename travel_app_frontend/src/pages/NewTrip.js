import React, { Component } from 'react';
import {Row, Col, Form, Modal, ModalBody, ModalHeader, Collapse, ModalFooter, Button, FormGroup, Label, Input,Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink} from 'reactstrap';
import AuthService from '../services/AuthService'
import '../css/NewTrip.css';



class NewTrip extends Component {
  constructor(props) {
    super(props)
    this.Auth = new AuthService()
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      apiURL: 'http://localhost:3000',
      errors: '',
      form: {
        title: '',
        city: '',
        state: '',
        country: '',
        start_date: '',
        end_date: '',
        description: '',
        link: '',
        user_id: '',
        collapsed: true,
      }
    }
  }

  handleChange(e){
    const { form } = this.state
    form[e.target.name] = e.target.value
    form.user_id = this.Auth.getUserId()
    this.setState({
    })
  }


  newTripSubmit(event){
    //when a submission happens we are NOT sending a url with parameters, opting to send json state object instead
    event.preventDefault()
    //set new trip to state
    const newTrip = this.state.form
    //send json version of new trip to backend api with post method
    fetch(`${this.state.apiURL}/trips`,
      {
        body: JSON.stringify(newTrip),
        headers: {
          'Content-Type': 'application/json'
        },
        method: "POST"
      }
    )
    .then((rawResponse) => { //process response
      return Promise.all([rawResponse.status, rawResponse.json()])
    })
    .then((parsedResponse) =>{ //if response is error, update this.state.error
      if (parsedResponse[0] === 422) {
        this.setState({errors: 'Invalid Inputs'})
      } else { //(temporarily) set alert=success
        //todo redirect to login
        this.setState({errors: null})
        alert('Success')
      }})
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render(){
    return(
      <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto"><h1>Trippin Out!</h1></NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
        <Collapse isOpen={!this.state.collapsed} navbar>
          <Nav navbar align="right">
            <NavItem>
              <NavLink href="/Trips">My Trips</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Trips">My Past Trips</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Trips">Logout</NavLink>   //TODO add logout functionality
            </NavItem>
          </Nav>
        </Collapse>
        </Navbar>
          <Modal isOpen>
          <ModalHeader toggle={this.toggle}>Create New Trip</ModalHeader>
            <ModalBody>
              <form
                onSubmit={this.newTripSubmit.bind(this)}>
                <FormGroup row>
                  <Label for="Title" hidden sm={2}>Title</Label>
                  <Col sm={5}>
                    <Input type="text" name="Title" id="inputLarge" placeholder="Title" value= {this.state.form.title}
                    onChange={this.handleChange.bind(this)}/>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="city" hidden sm={2}>City</Label>
                  <Col sm={5}>
                    <Input type="text" name="city" id="inputLarge" placeholder="City" value= {this.state.form.city}
                    onChange={this.handleChange.bind(this)}/>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="state" hidden sm={2}>City</Label>
                  <Col sm={5}>
                    <Input type="text" name="state" id="inputLarge" placeholder="State" value= {this.state.form.state}
                    onChange={this.handleChange.bind(this)}/>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="country" hidden sm={2}>Country</Label>
                  <Col sm={5}>
                    <Input type="text" name="country" id="inputLarge" placeholder="Country" value= {this.state.form.country}
                    onChange={this.handleChange.bind(this)}/>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="start_date" sm={2}>Start Date</Label>
                  <Col sm={5}>
                    <Input type="date" name="start_date" id="inputLarge" placeholder="Start Date" value= {this.state.form.start_date}
                    onChange={this.handleChange.bind(this)}/>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="end_date" sm={2}>End Date</Label>
                  <Col sm={5}>
                    <Input type="date" name="end_date" id="inputLarge" placeholder="End Date" value= {this.state.form.end_date}
                    onChange={this.handleChange.bind(this)}/>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="description" sm={2}>Description</Label>
                  <Col sm={5}>
                    <Input type="textarea" rows="5" name="description" id="exampleTextarea" placeholder="Add ideas for your trip here! Events, Adventures, and Explorations!" value= {this.state.form.description}
                    onChange={this.handleChange.bind(this)}/>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="link" sm={2}>Links</Label>
                  <Col sm={5}>
                    <Input type="textarea" rows="3" name="link" id="exampleTextarea" placeholder="Add links that pertain to your trip here..." value= {this.state.form.link}
                    onChange={this.handleChange.bind(this)}/>
                  </Col>
                </FormGroup>
                <button
                  type="button"
                  input type="submit"
                  value='Submit'
                  className="btn btn-primary btn-lg btn-block form-submit">
                      Submit
                </button>
              </form>
            </ModalBody>
          </Modal>
      </div>
    );
  }
}

export default NewTrip;
