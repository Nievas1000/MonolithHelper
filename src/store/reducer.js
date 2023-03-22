import { createStore } from 'redux';
// Reduce donde se declaran los diferentes states de las app del usuario y sus respectivas acciones

const initialState = {
	allApps: [],
	dropdown: [],
	initialApps: [],
	selectedApp: null,
	selectedClass: 'Select class...',
	infoGraph: {
		interfaces: true,
		tables: true,
	},
	deletedApp: false,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INITIAL_APPS':
			return {
				...state,
				allApps: action.payload,
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
				selectedClass: state.selectedApp
					? state.selectedApp.classes[0][0]
					: state.selectedClass,
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
				dropdown: state.dropdown.filter(
					(app) => app.applicationName !== action.payload.applicationName,
					state.initialApps.push(action.payload),
					state.initialApps.length > 3
						? state.dropdown.push(state.initialApps[0])
						: [...state.initialApps]
				),
				initialApps:
					state.initialApps.length > 3
						? state.initialApps.splice(1)
						: [...state.initialApps],
				selectedApp: action.payload,
				selectedClass: action.payload.classes[0][0],
			};
		case 'SELECT_APP':
			return {
				...state,
				selectedApp: action.payload,
				selectedClass: action.payload.classes[0][0],
			};
		case 'SELECT_CLASS':
			return {
				...state,
				selectedClass: action.payload,
			};
		case 'SET_INTERFACES':
			return {
				...state,
				infoGraph: {
					...state.infoGraph,
					interfaces: !state.infoGraph.interfaces,
				},
			};
		case 'SET_TABLES':
			return {
				...state,
				infoGraph: {
					...state.infoGraph,
					tables: !state.infoGraph.tables,
				},
			};
		case 'SET_DELETE_APP':
			return {
				...state,
				deletedApp: action.payload.delete,
			};
		case 'CHANGE_APP':
			if (state.initialApps.length === 1) {
				return {
					...state,
					initialApps: state.initialApps.filter(
						(ele) => ele.applicationName !== action.payload
					),
					selectedClass: 'Select class...',
				};
			} else {
				return {
					...state,
					initialApps: state.initialApps.filter(
						(ele) => ele.applicationName !== action.payload
					),
					selectedApp:
						state.initialApps[0].applicationName === action.payload
							? state.initialApps[0 + 1]
							: state.initialApps[0],
					selectedClass: state.initialApps[0].classes[0][0],
				};
			}
		default:
			return state;
	}
};

export default createStore(reducer);
