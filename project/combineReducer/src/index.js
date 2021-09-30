import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,applyMiddleware ,combineReducers} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

export const MULTIPLY_FIVE = 'MULTIPLY_FIVE';

const initialState = {
	val_five: 1
}

export const multiplyFive = () => {
	return {
		type: MULTIPLY_FIVE
	}
}

const FiveReducer = (state = initialState, action) => {
	switch(action.type){
		case MULTIPLY_FIVE:
            return {
			...state,
			val_five: state.val_five * 5
		}		
		default: 
        return state
	}
}

const store = combineReducers({
	five: FiveReducer
})



ReactDOM.render(<Provider store={store}>  <App /> </Provider>, document.getElementById('root'));