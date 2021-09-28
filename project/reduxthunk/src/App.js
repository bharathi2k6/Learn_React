import React from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch ,connect} from 'react-redux'
import {intenalUserAction, externalUserAction, subscribeAction} from './index';
 

class App extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
     return (
      <>
      <h1>Loading : {this.props.loading?'true':'false'}</h1>
      <h1>{JSON.stringify(this.props.data)}</h1>
      <h1>{JSON.stringify(this.props.error)}</h1>
      <button onClick={this.props.login}>login</button>
      </>

     );


  }

}

const middleware = () =>{
  return dispatch =>{
    dispatch({type:'LOGIN_START'})
    fetch('https://jsonplaceholder1.typicode.com/todos/1')
   .then(response => response.json())
   .then(json => dispatch({type:'LOGIN_SUCCESS',payload:json}))
   .catch(err => dispatch({type:'LOGIN_FAILIR',error:'ERROR'}) )
  }
}

const mapStateToProps = (state)=>{
  console.log(state);
  return state;
 }
 
 const mapDispatchToProps= (dispatch) =>{
   return{
     login : () => dispatch(middleware())
    
   }
 }
 export default connect(mapStateToProps,mapDispatchToProps)(App);