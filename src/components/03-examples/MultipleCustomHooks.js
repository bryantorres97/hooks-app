import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

export const MultipleCustomHooks = () => {
	const { counter, increment } = useCounter(1);
	const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;
	const { data, loading } = useFetch(url);
	const { author, quote } = !!data && data[0];

	const handleChangeQuote = () => {
		increment();
	};

	return (
		<div>
			<h1>BreakingBad Quotes</h1>
			<hr />

			{loading ? (
				<div className='alert alert-info text-center'>Loading ...</div>
			) : (
				<blockquote className='blockquote text-right'>
					<p>{quote}</p>
					<footer className='blockquote-footer'>{author}</footer>
				</blockquote>
			)}

			<button className='btn btn-outline-primary' onClick={handleChangeQuote}>
				Siguiente frase
			</button>
		</div>
	);
};
