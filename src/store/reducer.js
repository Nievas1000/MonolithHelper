import { createStore } from 'redux';
// Reduce donde se declaran los diferentes states de las app del usuario y sus respectivas acciones

const initialState = {
	dropdown: [],
	initialApps: [],
	marginMore: 0,
	selectedApp: '',
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INITIAL_APPS':
			return {
				...state,
				initialApps: action.payload,
				selectedApp: action.payload[0].applicationName,
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
				initialApps: [...state.initialApps, action.payload],
				dropdown: state.dropdown.filter(
					(app) => app.applicationName !== action.payload.applicationName
				),
			};
		case 'SET_MARGIN_MORE':
			return {
				...state,
				marginMore: action.payload,
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
