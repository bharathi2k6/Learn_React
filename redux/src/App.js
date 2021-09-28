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
      <h1>{this.props.isSubscribe?'true':'false'}</h1>
      <h1>{JSON.stringify(this.props)}</h1>    
      </>

     );


  }
 /* const users = useSelector(state=>state);
    const dispatch= useDispatch();
  return (
    <>
    <h1>{users.isSubscribe?'true':'false'}</h1>
    <h1>{users.stateValue}</h1>    
    <button disabled = {!users.isSubscribe}  onClick = {()=>dispatch(intenalUserAction())}>Internal User</button>&nbsp;
    <button disabled = {!users.isSubscribe} onClick = {()=>dispatch(externalUserAction())}>External Action</button> &nbsp;  
    <button onClick = {()=>dispatch(subscribeAction())}>{!users.isSubscribe?'Subscribe':'UnSubscribe'}</button>  
    </>
  );*/
}

const mapStateToProps = (state)=>{
 return state;
}

const mapDispatchToProps= (dispatch) =>{
  return{
    intenalUser : () => dispatch(intenalUserAction()),
    externalUser : () => dispatch(externalUserAction()),
    subscribe : () => dispatch(subscribeAction())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);