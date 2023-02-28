import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useEffect, useState } from 'react';
import useGeneralLogin from './useGeneralLogin';

// Hook para obtener los datos de un usuario mediante el oauth de google y luego hacer el login o registrar al usuario
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

	// Obtenemos token google y datos del usuario
	const loginWithGoogle = useGoogleLogin({
		onSuccess: async (credentialResponse) => {
			localStorage.setItem(
				'accessTokenGoogle',
				credentialResponse.access_token
			);
			try {
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
			} catch (error) {
				console.log(error.response.data);
			}
		},
	});

	const selectGoogle = () => {
		setActiveGoogle(true);
		setTimeout(function () {
			setActiveGoogle(false);
			loginWithGoogle();
		}, 250);
	};

	return [selectGoogle, activeGoogle];
};

export default useLoginGoogle;
