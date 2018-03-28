import React, { Component } from 'react';


class Register extends Component {
    constructor(){
      super()
      this.state = {
        apiURL: 'http://localhost:3000',
        errors: '',
        // state gets updated from handleChange, and sent to server with newUserSubmit
        form: {
          first_name: '',
          last_name: '',
          city: '',
          state: '',
          email: '',
          password: '',
          password_confirmation: '',
          //todo: profile pic avatar
        }
      }
    }

//handleChange is called any time a user inputs any value into a form field, when they do so the corresponding state.from field is updated
handleChange(e){
  const formState = Object.assign({}, this.state.form)
  formState[e.target.name] = e.target.value
  this.setState({form: formState})
}

newUserSubmit(event){
  //when a submission happens we are NOT sending a url with parameters, opting to send json state object instead
  event.preventDefault()
  //set newUser to state
  const newUser = this.state.form
  //send json version of newUser to backend api with post method
  fetch(`${this.state.apiURL}/users`,
    {
      body: JSON.stringify(newUser),
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
    } else { //otherwise redirect to login and (temporarily) set alert=success
      //todo redirect to login
      this.setState({errors: null})
      alert('Success')
    }})
}



  render() {
    return(
      //only returning form field with no editing FOR NOW
      <div>
        <form
          onSubmit={this.newUserSubmit.bind(this)}
        >
          <label id='first_name'>First Name</label>
          <input
            placeholder="First Name"
            name='first_name'
            id='first_name_test'
            value= {this.state.form.first_name}
            onChange={this.handleChange.bind(this)}
            type="text"
          />
          <label id='last_name'>Last Name</label>
          <input
            placeholder="Last Name"
            name='last_name'
            value= {this.state.form.last_name}
            onChange={this.handleChange.bind(this)}
            type="text"
          />
          <label id='city'>City</label>
          <input
            placeholder="City"
            name='city'
            value= {this.state.form.city}
            onChange={this.handleChange.bind(this)}
            type="text"
          />
          <label id='state'>State</label>
          <input
            placeholder="State"
            name='state'
            value= {this.state.form.state}
            onChange={this.handleChange.bind(this)}
            type="text"
          />
          <label id='email'>Email</label>
          <input
            placeholder="Email"
            name='email'
            value= {this.state.form.email}
            onChange={this.handleChange.bind(this)}
            type="email"
          />
          <label id='password'>Password</label>
          <input
            placeholder="Password"
            name='password'
            value= {this.state.form.password}
            onChange={this.handleChange.bind(this)}
            type="password"
          />
          <label id='password_confirmation'>Password Confirm</label>
          <input
            placeholder="Confirm Password"
            name='password_confirmation'
            value= {this.state.form.password_confirmation}
            onChange={this.handleChange.bind(this)}
            type="password"
          />
          //TODO: add profile picture upload with PaperClip
          <input
            className='form-submit'
            type="submit"
            value='Submit'
          />
        </form>
      </div>
    );

  }
}

export default Register
