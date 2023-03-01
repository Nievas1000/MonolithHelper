import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Hook que es usado para hacer el login del usuario y registrarlo si no lo esta aun
const useGeneralLogin = () => {
	const navigate = useNavigate();
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
			if (response.status === 200) {
				localStorage.setItem('userAppKey', data.message.USER_APPLICATION_KEY);
				navigate('/my-app');
			}
		} catch (error) {
			console.error(error.response.data);
		}
	};
	return [registry];
};

export default useGeneralLogin;
