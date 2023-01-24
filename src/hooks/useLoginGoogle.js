import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useState } from 'react';

const useLoginGoogle = () => {
	const [activeGoogle, setActiveGoogle] = useState(false);
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
		console.log(user);
		try {
			const response = await axios.post(
				`${process.env.REACT_APP_API_URL}/login`,
				user
			);
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	};

	return [login, activeGoogle, setActiveGoogle];
};

export default useLoginGoogle;
