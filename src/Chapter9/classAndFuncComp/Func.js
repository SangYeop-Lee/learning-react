import React, { useState } from 'react';
import PropTypes from 'prop-types';

const FuncComp = ({ name, children, favoriteNumber }) => {
	
	const [form, setForm] = useState({
		number: favoriteNumber,
		fixedNumber: 3,
	});
	const clickHandler = () => {
		setForm( (oldState) => ({
			...oldState, // necessary
			number: oldState.number+1
		}))
	}

	return (
		<div>
			안녕하세요, 제 이름은 {name}입니다.<br />
			children 값은 {children}입니다. <br />
			제가 좋아하는 숫자는 {form.number}입니다.<br />
			고정된 숫자는: {form.fixedNumber}<br />
			<button
				onClick={clickHandler}>+1</button><br />
			<input
				placeholder="입력하세요."
				onChange={e => {
					console.log(e.target.value);
				}}
				name="message"
				type="text"
				></input>
		</div>
	);
}

FuncComp.defaultProps = {
	name: "React"
};


/*
propTypes:
	array
	arrayOf(PropType)
	bool
	func
	numberobject
	stringsymbol
	node: 숫자, 문자열, JSX, children ...
	instanceOf(Class)
	oneOf(['dog, 'cat'])
	oneOfType(PropTypes)
	objectOf() (?)
	schema({ ... key: PropTypes })
	any
*/
FuncComp.propTypes = {
	name: PropTypes.string,
	favoriteNumber: PropTypes.number.isRequired
};

export default FuncComp;