import React, { useMemo, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import Header from '../shared/Header';

export const MemoHook = () => {
	const { counter, increment } = useCounter(5000);
	const [show, setShow] = useState(true);

	const procesoPesado = (iteraciones) => {
		for (let i = 0; i < iteraciones; i++) {
			console.log('Vamos!!');
		}
	};

	const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);
	return (
		<div>
			<Header title='Memo Hook' />
			<h3>
				Counter: <small>{counter}</small>
			</h3>
			<p>{memoProcesoPesado}</p>
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
