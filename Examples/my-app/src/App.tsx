import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Employee from './Employee';

class App extends Component {
  render(){
    return(
      <h1><Employee company={'mydomain'} /></h1>
    );   

  }
} 

export default App;
