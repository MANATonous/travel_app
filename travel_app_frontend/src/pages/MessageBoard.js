import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import {ListGroup, ListGroupItem, Badge, Col} from 'reactstrap';
import { Scrollbars } from 'react-custom-scrollbars';
import '../css/MessageBoard.css';
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
      console.log(rawResponse)
      return rawResponse.json()
    })
    .then((parsedResponse) =>{
      this.setState(
        {chats: parsedResponse}
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
    e.target.reset()
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
        chat.push(newMes)
        this.setState({errors: null, chats: chat})
        this.render()
      }})
  }

  render() {
    return (
      <div className="message-board">
        <h3>Message Board</h3>
          <Scrollbars style={{ width: 500, height: 350 }}>
          {this.state.chats.map((chats, index) =>{
            return(
                <ListGroup sm={3} key={index}>
                    <Col sm={12}>
                      <ListGroupItem className="chatMessage">
                      <Badge pill>
                        {chats.user_id}
                      </Badge> {chats.message}</ListGroupItem>
                    </Col>
                </ListGroup>
            )
          })}
          </Scrollbars>

          <form className="input" onSubmit={this.submitMessage.bind(this)}>
            <input type="text" id="newsuggestion" className="col-form-label" placeholder=" Suggestions?" align="center" onChange={this.handleChange.bind(this)}/>
            <br /> <input type="submit" value="Submit" className="btn btn-secondary" id="newsuggestion2"/>
          </form>

          <br />
        </div>
      )
    }
  }




export default MessageBoard;
