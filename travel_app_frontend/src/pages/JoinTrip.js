import React, { Component } from 'react';
import {Row, Col, Form} from 'react-bootstrap';

class JoinTrip extends Component {
  constructor(props){
    super(props)
    this.state = {
      apiUrl: 'http://localhost:3000',
      code: ''
    }
  }

  handleChange(e){
    let codeVal = this.state.code
    codeVal = e.target.value
    this.setState({code: codeVal})
    console.log(this.state.code);
  }

  render(){
    return(
      <Form>
        <Row>
          <div className="form-group">
            <label className="col-form-label col-form-label-lg title">Enter Your Trip Code: </label>
            <input className="form-control form-control-lg title" type="text" placeholder="Code" name="code" value={this.state.code} onChange={this.handleChange.bind(this)} id="inputLarge" />
          </div>
        </Row>
        <Row>
          <input type="submit" className="btn btn-primary submit" value="Join Trip"  />
        </Row>
      </Form>
    )
  }
}

export default JoinTrip;
