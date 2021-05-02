import { useEffect, useRef, useState } from 'react';

export const useFetch = (url) => {
	const initialState = {
		data: null,
		error: null,
		loading: true,
	};

	const isMounted = useRef(true);
	const [state, setState] = useState(initialState);

	useEffect(() => {
		return () => {
			isMounted.current = false;
		};
	}, []);

	const getData = async () => {
		setState(initialState);
		try {
			const data = await (await fetch(url)).json();
			setTimeout(() => {
				isMounted.current
					? setState({ data, error: null, loading: false })
					: console.log('No se llama el setState');
			}, 500);
		} catch (error) {
			console.log(error);
			setState({ data: null, error: 'Ha ocurrido un error', loading: false });
		}
	};

	useEffect(() => {
		getData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [url]);

	return state;
};
