import axios from 'axios';
import { useEffect } from 'react';

// Hook que usamos para obtener los datos de las aplicaciones que tiene un usaurio mediante la userApplicationKey
const useApp = () => {
	const userApplicationKey = localStorage.getItem('userAppKey');
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
				console.log(response);
			} catch (error) {
				console.log(error);
			}
		};
		getDataApp();
	});
};

export default useApp;
