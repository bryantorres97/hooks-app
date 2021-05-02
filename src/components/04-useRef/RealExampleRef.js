import React, { useState } from 'react';
import Header from '../shared/Header';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';

export const RealExampleRef = () => {
	const [show, setShow] = useState(false);
	// const show = useRef(false)
	return (
		<div>
			<Header title='Real Example Ref' />
			{show && <MultipleCustomHooks />}
			<button className='btn btn-secondary mt-5' onClick={() => setShow(!show)}>
				Show/Hide
			</button>
		</div>
	);
};
