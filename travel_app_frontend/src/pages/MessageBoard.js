import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

class MessageBoard extends Component {
  constructor(props){
    super(props)
    this.state = {
      chats: [
              {
                username: "Rachel",
                chat: "Hey guys, let's go on a trip!"
              },
              {
                username: "Joey",
                chat: "Where should be go?"
              },
              {
                username: "Phoebe",
                chat: "How about Atlantic City?!"
              },
              {
                username: "Chandler",
                chat: "No, let's go to Vegas instead!"
              },
              {
                username: "Ross",
                chat: "Sounds good to me"
              },
              {
                username: "Monica",
                chat: "Count me in, too!"
              }
            ]
      }
  }

  submitMessage(e) {
    e.preventDefault()
  }

  render(){
    return(
      <div className="message-board">
        <h3>Message Board</h3>
        <div className="chats">
          {this.state.chats.map((chats, index) =>{
            return(
              <div className="card border-primary mb-3" key={index}>
                <div className="card-header">{chats.username}</div>
                <div className="card-body">
                  <p className="card-text">{chats.chat}</p>
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
