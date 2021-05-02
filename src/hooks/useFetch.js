import { useEffect, useState } from 'react';

export const useFetch = (url) => {
	const initialState = {
		data: null,
		error: null,
		loading: true,
	};
	const [state, setState] = useState(initialState);

	const getData = async () => {
		setState(initialState);
		try {
			setTimeout(async () => {
				const data = await (await fetch(url)).json();
				setState({ data, error: null, loading: false });
			}, 1000);
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
