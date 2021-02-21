import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ClassComp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			number: this.props.favoriteNumber,
			fixedNumber: 3
		};
		// this.clickHandler = this.clickHandler.bind(this);
	}

	clickHandler = (e) => {
		this.setState( oldState => ({
			// ...oldState,
			number: oldState.number+1
		}), () => {
			console.log(this.state);
		})
	}
	
	render() {
		const { name, children } = this.props;
		return (
			<div>
				안녕하세요, 제 이름은 {name}입니다.<br />
				children 값은 {children}입니다. <br />
				제가 좋아하는 숫자는 {this.state.number}입니다.<br />
				고정된 숫자는: {this.state.fixedNumber}<br />
				<button
					onClick={this.clickHandler}>+1</button>
			</div>
		);
	}
}

ClassComp.defaultProps = {
	name: "React"
};

ClassComp.propTypes = {
	name: PropTypes.string,
	favoriteNumber: PropTypes.number.isRequired
};

export default ClassComp;