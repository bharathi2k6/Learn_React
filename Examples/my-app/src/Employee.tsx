import React, { Component } from "react";

type EmployeeProps = {
    name:string,
    age:number,
}
class Employee extends Component<EmployeeProps,{}>{
    
    render():JSX.Element{
        return(
        <>
       
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.age}</td>
            </tr>
       
       
         </>);
    }
}
export default Employee;

