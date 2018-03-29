import React, { Component } from 'react';
import '../css/App.css';
import withAuth from '../services/withAuth'

class App extends Component {
  render() {
    return (
      <div className="App">
        Welcome
      </div>
    );
  }
}

export default withAuth(App);
