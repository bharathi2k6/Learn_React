import { Component, FormEvent } from "react";
type EventState = {
    name:string
}

class Events extends Component <{},EventState>{
    
    state:Readonly<EventState> = {
        name:""
    }
    
    nameChange = (event:FormEvent<HTMLInputElement>):void=>{
      this.setState({name:event.currentTarget.value});
    }

    mySubmit =():void=>{
         alert(this.state.name);
    }

    render(){
        return (
            <>
            <form onSubmit={this.mySubmit}>
                <input type="text" name="name" onChange={this.nameChange} value ={this.state.name}/>
                <button type="submit">Submit</button>
            </form>
            </>
        )
    }
}
export default Events;