import React, { useContext } from 'react';
import Header from '../shared/Header';
import { UserContext } from './UserContext';

export const LoginScreen = () => {
	const { setUser } = useContext(UserContext);

	const handleLogin = () => {
		setUser({ id: 123456, nombre: 'Bryan', email: 'bryantorresckp@gmail.com' });
	};
	return (
		<>
			<Header title='Login Screen' />
			<button
				className='btn btn-outline-primary'
				type='button'
				onClick={handleLogin}
			>
				Login
			</button>
		</>
	);
};
