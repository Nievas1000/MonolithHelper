import { useDispatch } from 'react-redux';

export const useAddapp = () => {
	const dispatch = useDispatch();

	const addApplication = async () => {
		dispatch({
			type: 'ADD',
			payload: {
				info: true,
			},
		});
	};
	return [addApplication];
};
