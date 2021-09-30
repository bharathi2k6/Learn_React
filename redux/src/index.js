// Example 2
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './index.css';
import {createStore} from 'redux';
import { Provider } from 'react-redux';

export const intenalUserAction = () => ({type:INTERNAL_USER});
export const externalUserAction = () => ({type:EXTERNAL_USER});
export const subscribeAction = () =>({type:SUBSCRIBE});

const initialValue = {
  stateValue : 'User type not selected',
  isSubscribe:false
}
const INTERNAL_USER = 'INTERNAL_USER';
const EXTERNAL_USER = 'EXTERNAL_USER';
const SUBSCRIBE = 'SUBSCRIBE';

const userReducer = (state = initialValue,action) => {
 switch(action.type){
  case SUBSCRIBE:
     return {
      ...state,
      isSubscribe: !state.isSubscribe
     }
    break;
  case INTERNAL_USER:
     return {
      ...state,
      stateValue:'User form mydomain'
     }
  break;
  case EXTERNAL_USER:
    return {
      ...state,
      stateValue:'User from other company'
     }    
  break;
  default:
    return {
      ...state
    }
  break;
 }
}

let store = createStore(userReducer); 

ReactDOM.render( <Provider store={store}> <App /> </Provider>, document.getElementById('root'));

/* 
Example 1:

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore} from 'redux';

const INTERNAL_USER = 'INTERNAL_USER';
const EXTERNAL_USER = 'EXTERNAL_USER';
// Action
const intenalUserAction = () => ({type:INTERNAL_USER});
const externalUserAction = () => ({type:EXTERNAL_USER});
// Reducer

const userReducer = (state,action) => {
 switch(action.type){
   case INTERNAL_USER:
     return state = 'user form internal';
  
  case EXTERNAL_USER:
    return state = 'User from outsource';
  
  default:
    return state='User type is not able to find';  
 }
}

// store 
let store = createStore(userReducer);
 store.subscribe(() =>
  console.log('State after dispatch: ', store.getState())
);

// disapatch
console.log(store.dispatch(intenalUserAction()));
console.log(store.dispatch(externalUserAction()));

ReactDOM.render(<h1>test</h1>,document.getElementById('root')); */

