import React from 'react';
import PropTypes from 'prop-types';

const TodoListItem = ({ todo, index, handleUpdateTodo, handleDeleteTodo }) => {
	return (
		<li key={todo.id} className='list-group-item'>
			<p
				className={todo.done ? 'text-center complete' : 'text-center'}
				onClick={() => handleUpdateTodo(todo.id)}
			>
				{index + 1}. {todo.desc}
			</p>
			<button
				className='btn btn-outline-danger btn-sm'
				type='button'
				onClick={() => handleDeleteTodo(todo.id)}
			>
				Eliminar
			</button>
		</li>
	);
};

TodoListItem.propTypes = {
	todo: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired,
	handleUpdateTodo: PropTypes.func.isRequired,
	handleDeleteTodo: PropTypes.func.isRequired,
};

export default TodoListItem;
