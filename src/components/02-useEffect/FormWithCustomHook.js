import React from 'react';
import { useForm } from '../../hooks/useForm';

export const FormWithCustomHook = () => {
	const [formValues, handleInputChange] = useForm({
		name: '',
		email: '',
		password: '',
	});

	const { name, email, password } = formValues;

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formValues);
	};

	return (
		<form onSubmit={handleSubmit}>
			<h1>Form With Custom Hook</h1>
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
				<input
					type='password'
					name='password'
					placeholder='Escribe tu contraseña'
					className='form-control mt-2'
					autoComplete='off'
					value={password}
					onChange={handleInputChange}
				/>

				<button
					type='submit'
					onClick={handleSubmit}
					className='btn btn-outline-primary mt-2'
				>
					Guardar
				</button>
			</div>
		</form>
	);
};
