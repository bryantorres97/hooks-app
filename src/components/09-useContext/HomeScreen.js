import React, { useContext } from 'react';
import Header from '../shared/Header';
import { UserContext } from './UserContext';

export const HomeScreen = () => {
	const { user } = useContext(UserContext);

	return (
		<>
			<Header title='Home Screen' />
			<pre>{JSON.stringify(user, null, 3)}</pre>
		</>
	);
};
