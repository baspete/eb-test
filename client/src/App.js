import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    message: ''
  };

  getMessage = (endpoint, cb) => {
    fetch(endpoint)
      .then(response => {
        response.json().then(data => {
          cb(data);
        });
      })
      .catch(function(err) {
        // console.log('Fetch Error :-S', err);
      });
  };

  componentDidMount() {
    this.getMessage('/api/hello', response => {
      this.setState({ message: response.message });
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default App;
