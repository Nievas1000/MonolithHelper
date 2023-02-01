import { useDispatch } from 'react-redux';

// Agregamos app al menu dropdown mediante el dispatch de redux
const useDropdownMenu = () => {
	const dispatch = useDispatch();
	const addAppToDropdown = (name) => {
		dispatch({
			type: 'ADD_DROPDOWN',
			payload: name,
		});
	};

	return [addAppToDropdown];
};

export default useDropdownMenu;
