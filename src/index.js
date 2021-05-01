import React from 'react';
import ReactDOM from 'react-dom';
// import HooksApp from './HooksApp';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
// eslint-disable-next-line
import { CounterApp } from './components/01-useState/CounterApp';
import CounterWithCustomHook from './components/01-useState/CounterWithCustomHook';

ReactDOM.render(
	<React.StrictMode>
		{/* <HooksApp /> */}
		{/* <CounterApp /> */}
		<CounterWithCustomHook />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
