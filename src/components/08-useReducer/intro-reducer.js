const initialState = [
	{
		id: 1,
		todo: 'Comprar el pan',
		done: false,
	},
];

const todoReducer = (state = initialState, action) => {
	switch (action?.type) {
		case 'ADD':
			return [...state, action.payload];
		default:
			return state;
	}
};

let todos = todoReducer();

const newTodo = {
	id: 2,
	todo: 'Comprar leche',
	done: false,
};

const addTodoAction = {
	type: 'ADD',
	payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);
console.log(todos);
