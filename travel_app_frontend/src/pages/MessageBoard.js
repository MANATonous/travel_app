import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

class MessageBoard extends Component {
  constructor(props){
    super(props)
    this.state = {
      apiUrl: "http://localhost:3000",
      chats: []
      }
  }

  submitMessage(e) {
    e.preventDefault()
  }

  componentWillMount(){
    fetch(`${this.state.apiUrl}/messages.json`)
    .then((rawResponse) =>{
      return rawResponse.json()
    })
    .then((parsedResponse) =>{
      this.setState({chats: parsedResponse})
    })
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
          <input type="text" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default MessageBoard;
