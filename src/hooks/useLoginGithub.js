import axios from 'axios';
import { useEffect, useState } from 'react';
import useGeneralLogin from './useGeneralLogin';

const useLoginGithub = () => {
	const [activeGithub, setActiveGithub] = useState(false);
	const [registry] = useGeneralLogin();
	useEffect(() => {
		try {
			const queryString = window.location.search;
			const urlParams = new URLSearchParams(queryString);
			const codeParams = urlParams.get('code');
			if (localStorage.getItem('accessTokenGithub')) {
				getDataByGithub();
			} else {
				if (codeParams && localStorage.getItem('accessTokenGithub') === null) {
					const getAccessToken = async () => {
						try {
							const response = await axios.get(
								`${process.env.REACT_APP_API_URL}/getTokenGithub?code=${codeParams}`,
								{
									headers: {
										'x-api-key': process.env.REACT_APP_API_GATEWAY_TOKEN,
									},
								}
							);
							const data = response.data;
							if (data.data) {
								localStorage.setItem('accessTokenGithub', data.data);
								getDataByGithub();
							}
						} catch (error) {
							console.log(error);
						}
					};
					getAccessToken();
				}
			}
		} catch (error) {
			console.log(error);
		}
	}, []);

	const getDataByGithub = async () => {
		const response = await axios.get(
			`${process.env.REACT_APP_API_URL}/getDataByGitHub`,
			{
				headers: {
					Authorization: 'Bearer ' + localStorage.getItem('accessTokenGithub'),
					'x-api-key': process.env.REACT_APP_API_GATEWAY_TOKEN,
				},
			}
		);
		const data = response.data;
		registry({
			email: data.data.login,
			firstName: data.data.name,
			lastName: 'null',
		});
	};

	const loginWithGitHub = () => {
		window.location.assign(
			'https://github.com/login/oauth/authorize?client_id=' +
				process.env.REACT_APP_GITHUB_CLIENT_ID
		);
	};

	return [loginWithGitHub, activeGithub, setActiveGithub];
};

export default useLoginGithub;
