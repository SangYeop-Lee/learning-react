import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
	
	const [value, setValue] = useState('')
	
	const onChange = useCallback( e => {
		setValue(e.target.value);
	}, []);
	
	const onClick = useCallback( e => {
		e.preventDefault();
		onInsert(value);
		setValue('');
	}, [onInsert, value]);
	
	return (
		<form className="TodoInsert">
			<input
				type="text"
				value={value}
				onChange={onChange}
				placeholder="할 일을 입력하세요" />
			<button type="submit" onClick={onClick}>
				<MdAdd />
			</button>
		</form>
	);
};

export default TodoInsert;