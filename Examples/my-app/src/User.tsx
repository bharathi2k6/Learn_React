import React, { Component } from "react";

// Example 7 on change :
type userState = {
    name: string,
    age:number,
    city?:string
}

type userPops = {
    company:string,
    experience?:number,
    myclick:()=>void,
    
}

class User extends Component<userPops,userState>{
    state:Readonly<userState> = {
        name:'tester',
        age:32,
        city:'Chennai'
    }
    change = () => {
        this.setState({ 
        name:'tester1',
        age:35,
        city:'Bangalore'
      }); 
    }

    render():JSX.Element
    {  
        // helper will enable
        return(<>
            <h1>User</h1>
            <h1>{this.state.name} ====== {this.state.age}</h1> 
            <h1>{this.state.city} </h1> 
            <h1>{this.props.company} </h1> 
            <button onClick={this.change}>change</button>
            <button onClick={this.props.myclick}>MyClick</button>
        </>);
    }
} 

/* // Example 6 on change :
 type userState = {
    name: string,
    age:number,
    city?:string
}

class User extends Component<{},userState>{
    state:Readonly<userState> = {
        name:'tester',
        age:32,
        city:'Chennai'
    }
    change = () => {
        this.setState({ 
        name:'tester1',
        age:35,
        city:'Bangalore'
      }); 
    }

    render():JSX.Element
    {  
        // helper will enable
        return(<>
            <h1>User</h1>
            <h1>{this.state.name} ====== {this.state.age}</h1> 
            <h1>{this.state.city} </h1> 
            <button onClick={this.change}>change</button>
        </>);
    }
}  */

// Example 5 type and interface :
 /* type userState = {
    name: string,
    age:number,
    city?:string
}

class User extends Component<{},userState>{
    state:Readonly<userState> = {
        name:'tester',
        age:32,
        city:'chennai'
    }

    render():JSX.Element
    {  
        // helper will enable
        return(<>
            <h1>User</h1>
            <h1>{this.state.name} ====== {this.state.age}</h1> 
            <h1>{this.state.city} </h1> 
        </>);
    }
}  */

// Example 4:
/* interface userState  {
    name: string,
    age:number,
    city?:string

}
class User extends Component<{},userState>{
    constructor(props:any){
     super(props);
     this.state = {
        name:'tester',
        age:32,
        city:'chennai'
     }
    }
    render():JSX.Element
    {  
        // helper will enable
        return(<>
            <h1>User</h1>
            <h1>{this.state.name} ====== {this.state.age}</h1> 
            <h1>{this.state.city} </h1> 
        </>);
    }
} */

// Example 3 :
/* class User extends Component<{},{name: string,age:number,city?:string}>{
    constructor(props:any){
     super(props);
     this.state = {
        name:'tester',
        age:32,
        city:'chennai'
     }
    }
    render():JSX.Element
    {  
        // helper will enable
        return(<>
            <h1>User</h1>
            <h1>{this.state.name} ====== {this.state.age}</h1> 
            <h1>{this.state.city} </h1> 
        </>);
    }
} */

// Example 2 :
/* class User extends Component<{},{name: string,age:number}>{
    constructor(props:any){
     super(props);
     this.state = {
        name:'tester',
        age:32
     }
    }
    render():JSX.Element
    {  
        return(<>
            <h1>User</h1>
            <h1>{this.state.name} ====== {this.state.age}</h1>
        </>);
    }
} */


// Example 1 : JSX.Element
/* class User extends Component{
    render():JSX.Element
    {
        return 12;
        //return(<><h1>User</h1></>);
    }
} */

export default User;