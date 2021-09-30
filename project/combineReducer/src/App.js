import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import TwoContainer from './components/TwoContainer';
import { connect } from 'react-redux';
import './App.css';

function App() {
	return (
		<div className='TwoContainer'>
			<h1>{this.props.val_five}</h1>
			<h3>Click the button to multiply the above number by 2</h3>
			<button onClick={this.props.multiplyFive}>Multiply by 2</button>
		</div>
	);
}


const mapStateToProps = state => {
	return {
		val_five: state.five.val_five
	}
}


const mapDispatchToProps = dispatch => {
	return {
		multiplyFive: () => dispatch(multiplyFive())
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);

