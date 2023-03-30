import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Hook que usamos para obtener los datos de las aplicaciones que tiene un usaurio mediante la userApplicationKey que esta almacenada en el localStorage y la aplicacion demo
const useApp = () => {
	const userApplicationKey = localStorage.getItem('userAppKey');
	const dispatch = useDispatch();

	useEffect(() => {
		const getDataApp = async () => {
			try {
				const responseDemo = await axios.post(
					`${process.env.REACT_APP_API_URL}/app`,
					{
						type: 'demo',
						userApplicationKey: 'j3DemoApp',
					},
					{
						headers: {
							'x-api-key': process.env.REACT_APP_API_GATEWAY_TOKEN,
						},
					}
				);
				let data = responseDemo.data.body;
				const response = await axios.post(
					`${process.env.REACT_APP_API_URL}/app`,
					{
						type: 'demo',
						userApplicationKey,
					},
					{
						headers: {
							'x-api-key': process.env.REACT_APP_API_GATEWAY_TOKEN,
						},
					}
				);
				data = data.concat(response.data.body);
				if (data.length > 0) {
					dispatch({
						type: 'INITIAL_APPS',
						payload: data,
					});
				}
			} catch (error) {
				console.log(error);
			}
		};
		getDataApp();
		const getFullApp = async () => {
			try {
				const responseDemo = await axios.post(
					`${process.env.REACT_APP_API_URL}/app`,
					{
						type: 'get',
						userApplicationKey: 'j3DemoApp',
					},
					{
						headers: {
							'x-api-key': process.env.REACT_APP_API_GATEWAY_TOKEN,
						},
					}
				);
				let data = responseDemo.data.body;
				console.log(data);
				const response = await axios.post(
					`${process.env.REACT_APP_API_URL}/app`,
					{
						type: 'get',
						userApplicationKey,
					},
					{
						headers: {
							'x-api-key': process.env.REACT_APP_API_GATEWAY_TOKEN,
						},
					}
				);
				data = data.concat(response.data.body);
				if (data.length > 0) {
					dispatch({
						type: 'INITIAL_APPS',
						payload: data,
					});
					dispatch({
						type: 'SELECT_APP',
						payload: data[0],
					});
				}
			} catch (error) {
				console.log(error);
			}
		};
		getFullApp();
	}, []);
};

export default useApp;
