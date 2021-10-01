import React, { Component } from "react";

type EmployeeStage = {
    name:string,
    age:number,
    city?:string
}
/* interface EmployeeStage{
    name:string,
    age:number,
    city?:string
} */
type EmployeeProps = {
    company :string
}

class Employee extends Component<EmployeeProps,EmployeeStage>{
    state:Readonly<EmployeeStage> = {
        name:'testuser',
        age:12,
    }
    change=()=>{
      this.setState({name:'bharathi',age:32});
    }
    render():JSX.Element{
        const {name,age} = this.state;
        return<> 
         <h1>Name :{name}</h1>
         <h1>Age :{age}</h1>
         <h1>company :{this.props.company}</h1>
         <button type="button" onClick={this.change}>Change</button>
         </>
    }
}
export default Employee;

