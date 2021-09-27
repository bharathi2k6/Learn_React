import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import { Provider } from 'react-redux'

const INTERNAL_USER = 'INTERNAL_USER';
const EXTERNAL_USER = 'EXTERNAL_USER';
const SUBSCRIBE = 'SUBSCRIBE'

export const intenalUserAction = () => ({type:INTERNAL_USER});
export const externalUserAction = () => ({type:EXTERNAL_USER});
export const subscribeAction = () =>({type:SUBSCRIBE});

const initialValue = {
  stateValue : 'User type not selected',
  isSubscribe:false
}

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
      stateValue:'User form socgen'
     }
  break;
  case EXTERNAL_USER:
    return {
      ...state,
      stateValue:'User from Cognizant'
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

ReactDOM.render( <Provider store={store}>
  <App />
</Provider>,
document.getElementById('root'));