import { createStore } from 'redux';
// Reduce donde se declaran los diferentes states de las app del usuario y sus respectivas acciones

const initialState = {
	dropdown: [],
	initialApps: [],
	selectedApp: null,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INITIAL_APPS':
			return {
				...state,
				initialApps: action.payload.slice(0, 3).sort((a, b) => {
					if (a.date < b.date) {
						return -1;
					}
					if (a.date > b.date) {
						return 1;
					}
					return 0;
				}),
				dropdown: action.payload.slice(3),
				selectedApp: action.payload[0],
			};
		case 'ADD_DROPDOWN':
			return {
				...state,
				dropdown: [...state.dropdown, action.payload],
				initialApps: state.initialApps.filter(
					(app) => app.applicationName !== action.payload.applicationName
				),
			};
		case 'REMOVE_DROPDOWN':
			return {
				...state,
				initialApps:
					state.initialApps.length < 4
						? [...state.initialApps, action.payload]
						: state.initialApps,
				dropdown:
					state.initialApps.length < 4
						? state.dropdown.filter(
								(app) => app.applicationName !== action.payload.applicationName
						  )
						: state.dropdown,
			};
		case 'SELECT_APP':
			return {
				...state,
				selectedApp: action.payload,
			};
		default:
			return state;
	}
};

export default createStore(reducer);
