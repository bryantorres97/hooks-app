import React, { useLayoutEffect, useRef, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
import Header from '../shared/Header';
import './layout.css';

export const LayoutEffect = () => {
	const { counter, increment } = useCounter(1);
	const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;
	const { data } = useFetch(url);
	const { quote } = !!data && data[0];

	const parrafo = useRef();

	const handleChangeQuote = () => {
		increment();
	};

	const [boxSize, setBoxSize] = useState({});

	useLayoutEffect(() => {
		setBoxSize(parrafo.current.getBoundingClientRect());
	}, [quote]);

	return (
		<div>
			<Header title='Layout Effect' />
			<blockquote className='blockquote text-right'>
				<p ref={parrafo}>{quote}</p>
			</blockquote>
			<pre>{JSON.stringify(boxSize, null, 3)}</pre>
			<button className='btn btn-outline-primary' onClick={handleChangeQuote}>
				Siguiente frase
			</button>
		</div>
	);
};
