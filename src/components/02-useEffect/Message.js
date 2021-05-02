import React, { useEffect, useState } from 'react';

export const Message = () => {
	const [coords, setCoords] = useState({ x: 0, y: 0 });
	const mouseMove = (e) => {
		const { x, y } = e;
		setCoords({ x, y });
	};

	const { x, y } = coords;

	useEffect(() => {
		window.addEventListener('mousemove', mouseMove);
		return () => {
			window.removeEventListener('mousemove', mouseMove);
		};
	}, []);

	return (
		<div>
			<h3>Eres genial</h3>
			<p>Coordenadas: {`${x},${y}`}</p>
		</div>
	);
};
