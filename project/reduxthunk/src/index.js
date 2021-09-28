import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


const LOGIN_START = 'LOGIN_START';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILIR = 'LOGIN_FAILIR';

const initialValue = {
  loading : false,
  data:[],
  error:''
}

const AsynReducer = (state=initialValue,action) => {
  switch(action.type){
   case LOGIN_START:
     return {
      ...state,
      loading:true,
     }
    
   case LOGIN_SUCCESS:
    return {
      loading:false,
      data:action.payload,
      error:''
     }
       
    case LOGIN_FAILIR:
      return {
      loading:true,
      data:[],
      error:action.error
      }
      
    default:
      return{
        ...state
      }
  }
}
 const store = createStore(AsynReducer,applyMiddleware(thunk));

  ReactDOM.render( <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));


