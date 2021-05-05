import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import TodoApp from './components/08-useReducer/TodoApp';
// import { Padre } from './components/07-tarea-memo/Padre';
// import { MemoHook } from './components/06-useMemo/MemoHook';
// import { CallbackHook } from './components/06-useMemo/CallbackHook';
// import { Memorize } from './components/06-useMemo/Memorize';
// import { LayoutEffect } from './components/05-useLayoutEffect/LayoutEffect';
// import { RealExampleRef } from './components/04-useRef/RealExampleRef';
// import HooksApp from './HooksApp';
// import { CounterApp } from './components/01-useState/CounterApp';
// import CounterWithCustomHook from './components/01-useState/CounterWithCustomHook';
// import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
// import { SimpleForm } from './components/02-useEffect/SimpleForm';
// import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
// import { FocusScreen } from './components/04-useRef/FocusScreen';

ReactDOM.render(
	<React.StrictMode>
		{/* <HooksApp /> */}
		{/* <CounterApp /> */}
		{/* <CounterWithCustomHook /> */}
		{/* <SimpleForm /> */}
		{/* <FormWithCustomHook /> */}
		{/* <MultipleCustomHooks /> */}
		{/* <FocusScreen /> */}
		{/* <RealExampleRef /> */}
		{/* <LayoutEffect /> */}
		{/* <Memorize /> */}
		{/* <MemoHook /> */}
		{/* <CallbackHook /> */}
		{/* <Padre /> */}
		<TodoApp />
	</React.StrictMode>,
	document.getElementById('root')
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// import './components/08-useReducer/intro-reducer';
