import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import AuthService from '../services/AuthService'

const Auth = new AuthService()

class MessageBoard extends Component {

  constructor(props){
    super(props)
    this.state = {
      apiUrl: "http://localhost:3000",
      chats: [],
      error: '',
      form: {
        user_id: '',
        trip_id: '',
        message_text: ''
      }
      }
  }


  componentWillMount(){

    // grab user_id from JWT and trip_id from local localStorage
    const { form } = this.state
    form.user_id = Auth.getUserId()
    form.trip_id = localStorage.getItem('trip_id')

    fetch(`${this.state.apiUrl}/messages_by_trip/${form.trip_id}.json`)
    .then((rawResponse) =>{
      return rawResponse.json()
    })
    .then((parsedResponse) =>{
      this.setState(
        {chats: parsedResponse,
        form }
        )
    })
  }

  handleChange(e){
    const { form } = this.state
    form.message_text = e.target.value
    this.setState({ form })
  }

  submitMessage(e){
    e.preventDefault()
    const newMessage = this.state.form
    fetch(`${this.state.apiUrl}/messages`,
      {
        body: JSON.stringify(newMessage),
        headers: {
          'Content-Type': 'application/json'
        },
        method: "POST"
      }
    )
    .then((rawResponse) => {
      console.log(rawResponse);
      return Promise.all([rawResponse.status, rawResponse.json()])
    })
    .then((parsedResponse) =>{  this.state.error
      if (parsedResponse[0] === 422) {
        this.setState({errors: 'Invalid Inputs'})
      } else {
        let chat = this.state.chats
        let newMes = {
          user_id:parsedResponse[1]['user_id'],
          trip_id:parsedResponse[1]['trip_id'],
          message:parsedResponse[1]['message']
        }
        console.log(newMes);
        chat.push(newMes)
        console.log(parsedResponse);
        this.setState({errors: null, chats: chat})
        this.render()
      }})
  }

  render(){
    return(
      <div className="message-board">
        <h3>Message Board</h3>
        <div className="chats">
          {this.state.chats.map((chats, index) =>{
            return(
              <div className="card border-primary mb-3" key={index}>
                <div className="card-header">{chats.user_id}</div>
                <div className="card-body">
                  <p className="card-text">{chats.message}</p>
                </div>
              </div>
            )
          })}
        </div>
        <form className="input" onSubmit={this.submitMessage.bind(this)}>
          <input type="text" onChange={this.handleChange.bind(this)}/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default MessageBoard;
