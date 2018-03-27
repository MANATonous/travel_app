import React, { Component } from 'react';


class Register extends Component {
    constructor(){
      super()
      this.state = {
        form: {
          first_name: '',
          last_name: '',
          city: '',
          state: '',
          email: '',
          password: '',
          password_confirmation: '',
          //TODO profile pic avatar
        }
      }
    }

handleChange(e){
  
}

handleSubmit(event){

  event.preventDefault()

  return("Form was submitted", this.state)
}

  render() {
    return(
      <div>
        <form
          onSubmit={this.handleSubmit.bind(this)}
        >
          <label id='first_name'>First Name</label>
          <input
            placeholder="First Name"
            name='first_name'
            value= {this.state.form.first_name}
            onChange={this.handleChange.bind(this)}
            type="text"
          />
          <label id='last_name'>Last Name</label>
          <input
            placeholder="Last Name"
            type="text"
          />
          <label id='city'>City</label>
          <input
            placeholder="City"
            type="text"
          />
          <label id='state'>State</label>
          <input
            placeholder="State"
            type="text"
          />
          <label id='email'>Email</label>
          <input
            placeholder="email"
            type="email"
          />
          <label id='password'>Password</label>
          <input
            placeholder="password"
            type="password"
          />
          <label id='password_confirmation'>Password Confirm</label>
          <input
            placeholder="Confirm Password"
            type="password"
          />
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
