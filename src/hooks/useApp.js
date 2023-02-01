import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Hook que usamos para obtener los datos de las aplicaciones que tiene un usaurio mediante la userApplicationKey que esta almacenada en el localStorage
const useApp = () => {
	const userApplicationKey = localStorage.getItem('userAppKey');
	const dispatch = useDispatch();
	useEffect(() => {
		const getDataApp = async () => {
			try {
				const response = await axios.post(
					`${process.env.REACT_APP_API_URL}/app`,
					{
						type: 'get',
						userApplicationKey,
					}
				);
				const data = response.data;
				if (data.statusCode === 200) {
					dispatch({
						type: 'INITIAL_APPS',
						payload: data.body,
					});
				}
			} catch (error) {
				console.log(error);
			}
		};
		getDataApp();
	}, []);
};

export default useApp;
