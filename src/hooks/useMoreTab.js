import { useDispatch } from 'react-redux';

// Agregamos app al menu dropdown mediante el dispatch de redux
const useMoreTab = () => {
	const dispatch = useDispatch();
	const selectApp = (app) => {
		dispatch({
			type: 'SELECT_APP',
			payload: app,
		});
	};
	const addAppToDropdown = (name) => {
		dispatch({
			type: 'ADD_DROPDOWN',
			payload: name,
		});
	};
	const remove = (app) => {
		dispatch({
			type: 'REMOVE_DROPDOWN',
			payload: app,
		});
	};

	return [selectApp, addAppToDropdown, remove];
};

export default useMoreTab;
