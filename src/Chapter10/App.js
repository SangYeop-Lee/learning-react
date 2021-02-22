import React, { useState, useRef, useCallback } from 'react';
import './index.css';
import TodoTemplate from './components/TodoTemplate'
import TodoInsert from './components/TodoInsert'
import TodoList from './components/TodoList'

function createBulkTodos() {
	const res = [];
	for (let i=1; i<2501; i++) {
		res.push({
			id: i,
			text: `할 일 ${i}`,
			checked: false
		});
	}
	return res;
}

const App = () => {
	// todo: id & content & checked
	const [todos, setTodos] = useState(createBulkTodos);

	const nextId = useRef(2501);
	
	const onInsert = useCallback( text => {
		const todo = {
			id: nextId.current,
			text,
			checked: false
		};
		setTodos(todos => todos.concat(todo));
		nextId.current += 1;
	}, [] );
	
	const onRemove = useCallback( id => {
		setTodos(todos => todos.filter( todo => todo.id!==id ))
	}, []);
	
	const onToggle = useCallback( id => {
		setTodos(todos => todos.map( todo => todo.id!==id ?
						  todo : { ...todo, checked: !todo.checked }))
	}, []);
	
	return (
		<TodoTemplate>
			<TodoInsert
				onInsert={onInsert}/>
			<TodoList
				todos={todos}
				onRemove={onRemove}
				onToggle={onToggle}/>
		</TodoTemplate>
	);
};

export default App;
