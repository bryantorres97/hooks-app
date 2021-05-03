import React from 'react';

export const ShowIncrement = ({ increment }) => {
	console.log('Me volvi a generar :(');
	return (
		<button className='btn btn-outline-primary' onClick={() => increment(8)}>
			Incrementar
		</button>
	);
};
