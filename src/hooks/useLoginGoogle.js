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
		const response = await axios.post('http://localhost:3001/login', user);
		const data = response.data;
		console.log(data);
	};

	return [login, activeGoogle, setActiveGoogle];
};

export default useLoginGoogle;
