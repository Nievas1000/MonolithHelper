import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useEffect, useState } from 'react';
import useGeneralLogin from './useGeneralLogin';

const useLoginGoogle = () => {
	const [activeGoogle, setActiveGoogle] = useState(false);
	const [registry] = useGeneralLogin();

	useEffect(() => {
		if (localStorage.getItem('accessTokenGoogle')) {
			const loginGoogle = async () => {
				const response = await axios.get(
					'https://www.googleapis.com/oauth2/v3/userinfo',
					{
						headers: {
							Authorization: `Bearer ${localStorage.getItem(
								'accessTokenGoogle'
							)}`,
						},
					}
				);
				const data = response.data;
				registry({
					email: data.email,
					firstName: data.given_name,
					lastName: data.family_name,
				});
			};
			loginGoogle();
		}
	}, []);

	const login = useGoogleLogin({
		onSuccess: async (credentialResponse) => {
			setActiveGoogle(!activeGoogle);
			localStorage.setItem(
				'accessTokenGoogle',
				credentialResponse.access_token
			);
			const response = await axios.get(
				'https://www.googleapis.com/oauth2/v3/userinfo',
				{
					headers: {
						Authorization: `Bearer ${credentialResponse.access_token}`,
					},
				}
			);
			const data = response.data;
			registry({
				email: data.email,
				firstName: data.given_name,
				lastName: data.family_name,
			});
		},
	});

	return [login, activeGoogle, setActiveGoogle];
};

export default useLoginGoogle;
