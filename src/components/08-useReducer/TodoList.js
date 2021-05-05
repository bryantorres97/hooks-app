import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, handleDeleteTodo, handleUpdateTodo }) => {
	return (
		<ul className='list-group list-group-flush'>
			{todos.map((todo, i) => (
				<TodoListItem
					todo={todo}
					index={i}
					handleDeleteTodo={handleDeleteTodo}
					handleUpdateTodo={handleUpdateTodo}
				/>
			))}
		</ul>
	);
};

TodoList.propTypes = {
	todos: PropTypes.object.isRequired,
	handleUpdateTodo: PropTypes.func.isRequired,
	handleDeleteTodo: PropTypes.func.isRequired,
};

export default TodoList;
