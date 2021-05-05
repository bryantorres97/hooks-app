export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';

const todoReducer = (state = [], action) => {
	switch (action.type) {
		case ADD_TODO:
			return [...state, action.payload];

		case DELETE_TODO:
			return state.filter((todo) => todo.id !== action.payload);

		case UPDATE_TODO:
			return state.map((todo) =>
				todo.id === action.payload ? { ...todo, done: !todo.done } : todo
			);
		// case UPDATE_TODO:
		// 	return state.map((todo) => {
		// 		if (todo.id === action.payload) {
		// 			return { ...todo, done: !todo.done };
		// 		} else {
		// 			return todo;
		// 		}
		// 	});
		default:
			return state;
	}
};

export default todoReducer;
