import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Employee from './Employee';

type EmployeeState = {
  name:string,
  age:number,
}

type EmployeeReport = {
  employeeReport:EmployeeState[]
}

class App extends Component <{},EmployeeReport> {
  state:Readonly<EmployeeReport> = {
    employeeReport:[{name:'bharathi',age:21},{name:'bharathi1',age:32}]

  }
  render(){
    return(
      <Employee  name={this.state.employeeReport[0].name} age={this.state.employeeReport[0].age}/>
    );   

  }
} 

export default App;
