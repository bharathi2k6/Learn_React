import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Employee from './Employee';
import User from './User';
import Events from './Events'

class App extends Component {
  render(){
    return(<>
      <Events />
    </>)
  }
}

export default App;

// automatic import
/*class App extends Component {
  render(){
    return(
      <><p></p>
      <User />
      </>
    );
  }
}*/

/* type EmployeeState = {
  name:string,
  age:number,
}

type EmployeeReport = {
  employeeReport:EmployeeState[]
}

class App extends Component<{},EmployeeReport> {
  state:Readonly<EmployeeReport> = {
    employeeReport:[
      {name:'tester4',age:21},
      {name:'tester5',age:32},
      {name:'tester6',age:32},
      {name:'tester7',age:32},
      {name:'tester8',age:32},
    ]
  }
  myclick = () =>{

    alert('Hello');
  }
  render(){
    return(
      <>
      <User company={"Intel"} myclick={this.myclick}/>
      <table>
          {this.state.employeeReport.map((element, i) => {
            return (<Employee name={element.name} age={element.age} />) 
          }) }            
        <Employee  name={this.state.employeeReport[0].name} age={this.state.employeeReport[0].age}/>
        <Employee  name={this.state.employeeReport[1].name} age={this.state.employeeReport[1].age}/>
      </table>
      </>
    );
  }
} */

