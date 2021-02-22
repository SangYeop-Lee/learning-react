import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
	
	state = {
		password: '',
		clicked: false,
		validated: false
	}
	
	handleChange = e => {
		this.setState({
			password: e.target.value
		})
	}
	
	handleButtonClick = e => {
		this.setState({
			clicked: true,
			validated: this.state.password==='0000'
		})
		this.input.focus();
	}
	
	handleKeyDown = e => {
		if (e.key==="Enter")
			this.handleButtonClick();
	}
	
	render() {
		const { password, clicked, validated } = this.state,
			  { handleChange, handleButtonClick, handleKeyDown } = this;
		return (
			<div>
				<input
					type="password"
					value={password}
					onChange={handleChange}
					onKeyDown={handleKeyDown}
					className={clicked ? (validated ? 'success' : 'failure') : ''}
					ref={ref => {this.input=ref}}
					/>
				<button onClick={handleButtonClick}>validate</button>
			</div>
		)
	}
}

export default ValidationSample;