import React, { useEffect, useReducer } from 'react';
import Header from '../shared/Header';
import todoReducer, { ADD_TODO, DELETE_TODO, UPDATE_TODO } from './todoReducer';
import './todo.css';
import TodoList from './TodoList';
import { TodoForm } from './TodoForm';

const init = () => {
	return JSON.parse(localStorage.getItem('todos')) || [];
};

const TodoApp = () => {
	const [todos, dispatch] = useReducer(todoReducer, [], init);

	const handleAddTodo = (newTodo) => {
		dispatch({
			type: ADD_TODO,
			payload: newTodo,
		});
	};

	const handleDeleteTodo = (id) => {
		dispatch({
			type: DELETE_TODO,
			payload: id,
		});
	};

	const handleUpdateTodo = (id) => {
		dispatch({
			type: UPDATE_TODO,
			payload: id,
		});
	};

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	return (
		<>
			<Header title={`Todo App (${todos.length})`} />
			<div className='row'>
				<div className='col-7'>
					<TodoList
						todos={todos}
						handleDeleteTodo={handleDeleteTodo}
						handleUpdateTodo={handleUpdateTodo}
					/>
				</div>
				<div className='col-5'>
					<TodoForm handleAddTodo={handleAddTodo} />
				</div>
			</div>
		</>
	);
};

export default TodoApp;
