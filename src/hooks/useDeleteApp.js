import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

export const useDeleteApp = () => {
	const app = useSelector((state) => state.selectedApp);
	const userApplicationKey = localStorage.getItem('userAppKey');
	const dispatch = useDispatch();

	const deletedApp = async () => {
		dispatch({
			type: 'SET_DELETE_APP',
			payload: {
				delete: true,
			},
		});
		try {
			const response = await axios.post(
				`${process.env.REACT_APP_API_URL}/deleteApp`,
				{
					type: 'delete',
					userApplicationKey,
					app: app.applicationName,
				},
				{
					headers: {
						'x-api-key': process.env.REACT_APP_API_GATEWAY_TOKEN,
					},
				}
			);
			console.log(response);
			if (response.data.statusCode === 200) {
				dispatch({
					type: 'CHANGE_APP',
					payload: app.applicationName,
				});
			}
		} catch (error) {
			console.log(error);
		}
		setTimeout(() => {
			dispatch({
				type: 'SET_DELETE_APP',
				payload: {
					delete: false,
				},
			});
		}, 3000);
	};

	return [deletedApp];
};
