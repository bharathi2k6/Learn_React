import React from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux'
import {intenalUserAction, externalUserAction, subscribeAction} from './index';

const App = () =>{
  const users = useSelector(state=>state);
  const dispatch= useDispatch();
  return (
    <>
    <h1>{users.isSubscribe?'true':'false'}</h1>
    <h1>{users.stateValue}</h1>    
    <button disabled = {!users.isSubscribe}  onClick = {()=>dispatch(intenalUserAction())}>Internal User</button>&nbsp;
    <button disabled = {!users.isSubscribe} onClick = {()=>dispatch(externalUserAction())}>External Action</button> &nbsp;  
    <button onClick = {()=>dispatch(subscribeAction())}>{!users.isSubscribe?'Subscribe':'UnSubscribe'}</button>  
    </>
  );
}

export default App;