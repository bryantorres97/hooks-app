import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
// import HooksApp from './HooksApp';
// import { CounterApp } from './components/01-useState/CounterApp';
// import CounterWithCustomHook from './components/01-useState/CounterWithCustomHook';
// import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
// import { SimpleForm } from './components/02-useEffect/SimpleForm';
// import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
import { FocusScreen } from './components/04-useRef/FocusScreen';

ReactDOM.render(
	<React.StrictMode>
		{/* <HooksApp /> */}
		{/* <CounterApp /> */}
		{/* <CounterWithCustomHook /> */}
		{/* <SimpleForm /> */}
		{/* <FormWithCustomHook /> */}
		{/* <MultipleCustomHooks /> */}
		<FocusScreen />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
