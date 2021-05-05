import React from 'react';
import { useForm } from '../../hooks/useForm';

export const TodoForm = ({ handleAddTodo }) => {
	const [{ desc }, handleFormChange, reset] = useForm({ desc: '' });

	const handleSubmit = (e) => {
		e.preventDefault();

		if (desc.trim() === '') return;

		const newTodo = {
			id: new Date().getTime(),
			desc,
			done: false,
		};

		handleAddTodo(newTodo);
		reset();
	};

	return (
		<>
			<h4>Agregar Tarea</h4>
			<hr />
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					name='desc'
					className='form-control'
					placeholder='Escribe tu tarea'
					autoComplete='off'
					value={desc}
					onChange={handleFormChange}
				/>
				<div className='d-grid gap-2 col-6 mx-auto'>
					<button
						type='submit'
						className='btn btn-outline-success btn-sm btn-block mt-2'
					>
						Agregar
					</button>
				</div>
			</form>
		</>
	);
};
