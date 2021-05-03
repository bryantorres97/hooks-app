import React, { useCallback, useState } from 'react';
import Header from '../shared/Header';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
	const [counter, setCounter] = useState(10);

	// const increment = () => setCounter(counter + 1);

	const increment = useCallback(
		(numero) => {
			setCounter((c) => c + numero);
		},
		[setCounter]
	);
	return (
		<div>
			<Header title={`useCallback Hook: ${counter}`} />
			<ShowIncrement increment={increment} />
		</div>
	);
};
