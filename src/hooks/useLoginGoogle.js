import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useLoginGoogle = () => {
	const [activeGoogle, setActiveGoogle] = useState(false);
	const navigate = useNavigate();
	const login = useGoogleLogin({
		onSuccess: async (credentialResponse) => {
			setActiveGoogle(!activeGoogle);
			const response = await axios.get(
				'https://www.googleapis.com/oauth2/v3/userinfo',
				{
					headers: {
						Authorization: `Bearer ${credentialResponse.access_token}`,
					},
				}
			);
			const data = response.data;
			resgistry({
				email: data.email,
				firstName: data.given_name,
				lastName: data.family_name,
			});
		},
	});

	const resgistry = async (user) => {
		try {
			const response = await axios.post(
				`${process.env.REACT_APP_API_URL}/login`,
				user
			);
			console.log(response);
			if (response.status === 200) {
				navigate('/my-app');
			}
		} catch (error) {
			console.log(error);
		}
	};

	return [login, activeGoogle, setActiveGoogle];
};

export default useLoginGoogle;
