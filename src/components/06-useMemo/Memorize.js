import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import Header from '../shared/Header';
import Small from './Small';

export const Memorize = () => {
	const { counter, increment } = useCounter(10);
	const [show, setShow] = useState(true);
	return (
		<div>
			<Header title='Memorize' />
			<h2>
				Counter <Small value={counter} />
			</h2>
			<button
				className='btn btn-outline-primary mt-2'
				onClick={() => increment()}
			>
				+1
			</button>

			<button
				className='btn btn-success mt-2 ms-5'
				onClick={() => setShow(!show)}
			>
				{' '}
				Show/ Hide {JSON.stringify(show)}
			</button>
		</div>
	);
};
