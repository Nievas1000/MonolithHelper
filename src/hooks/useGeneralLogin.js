import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// Hook que es usado para hacer el login del usuario y registrarlo si no lo esta aun
const useGeneralLogin = () => {
	const navigate = useNavigate();
	const state = useSelector((state) => state);
	const registry = async (user) => {
		try {
			const response = await axios.post(
				`${process.env.REACT_APP_API_URL}/login`,
				user,
				{
					headers: {
						'x-api-key': process.env.REACT_APP_API_GATEWAY_TOKEN,
					},
				}
			);
			const data = response.data;
			if (response.status === 200 && state.url==='') {
				localStorage.setItem('userAppKey', data.message.USER_APPLICATION_KEY);
				navigate('/my-app');
			}

			if(response.status === 200 && state.url==='/how-to-add-application'){
				localStorage.setItem('userAppKey', data.message.USER_APPLICATION_KEY);
				navigate('/how-to-add-application');
			}
		} catch (error) {
			console.error(error.response.data);
		}
	};
	return [registry];
};

export default useGeneralLogin;
