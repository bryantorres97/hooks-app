import React, { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
	const [formState, setFormState] = useState({
		name: '',
		email: '',
	});

	const { name, email } = formState;

	const handleInputChange = ({ target }) => {
		setFormState({ ...formState, [target.name]: target.value });
	};

	useEffect(() => {
		// console.log('hey');
	}, []);

	useEffect(() => {
		// console.log('Cambia el formulario');
	}, [formState]);

	useEffect(() => {
		// console.log('Cambia el email');
	}, [email]);

	return (
		<>
			<h1>useEffect</h1>
			<hr />
			<div className='form-group'>
				<input
					type='text'
					name='name'
					className='form-control'
					placeholder='Escribe tu nombre'
					autoComplete='off'
					value={name}
					onChange={handleInputChange}
				/>
				<input
					type='email'
					name='email'
					placeholder='Escribe tu email'
					className='form-control mt-2'
					autoComplete='off'
					value={email}
					onChange={handleInputChange}
				/>
			</div>

			{name === 'Bryan' && <Message />}
		</>
	);
};
