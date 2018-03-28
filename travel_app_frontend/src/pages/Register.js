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
  const formState = Object.assign({}, this.state.form)
  formState[e.target.name] = e.target.value
  this.setState({form: formState})
  console.log(this.state.form);
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
