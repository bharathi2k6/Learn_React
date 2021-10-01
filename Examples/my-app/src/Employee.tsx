import React, { Component } from "react";

/* type EmployeeStage = {
    name:string,
    age:number,
    city?:string
} */
/* interface EmployeeStage{
    name:string,
    age:number,
    city?:string
} */
/*type EmployeeProps = {
    company :string,
    change : ()=>void;
}*/

type EmployeeProps = {
    name:string,
    age:number,
}
class Employee extends Component<EmployeeProps,{}>{
    
    render():JSX.Element{
        return(
        <>
        <h1>{this.props.name}</h1> 
        <h1>{this.props.age}</h1> 
         </>);
    }
}
export default Employee;

