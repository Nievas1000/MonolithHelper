import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Hook que es usado para hacer el login del usuario y registrarlo si no lo esta aun
const useGeneralLogin = () => {
	const navigate = useNavigate();
	const registry = async (user) => {
		console.log(user);
		try {
			const response = await axios.post(
				`${process.env.REACT_APP_API_URL}/login`,
				user
			);
			const data = response.data;
			console.log(data);
			if (response.status === 200) {
				localStorage.setItem('userAppKey', data.message.USER_APPLICATION_KEY);
				navigate('/my-app');
			}
		} catch (error) {
			console.log(error);
		}
	};
	return [registry];
};

export default useGeneralLogin;
