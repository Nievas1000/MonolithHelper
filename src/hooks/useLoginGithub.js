import axios from 'axios';
import { useEffect, useState } from 'react';
import useGeneralLogin from './useGeneralLogin';

const useLoginGithub = () => {
	const [loginUser] = useGeneralLogin();
	const [activeGithub, setActiveGithub] = useState(false);
	useEffect(() => {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		const codeParams = urlParams.get('code');
		if (localStorage.getItem('accessToken')) {
			getDataByGithub();
		} else {
			if (codeParams && localStorage.getItem('accessToken') === null) {
				const getAccessToken = async () => {
					try {
						const response = await axios.get(
							`http://localhost:3001/getTokenGithub?code=${codeParams}`
						);
						const data = response.data;
						if (data.access_token) {
							localStorage.setItem('accessToken', data.access_token);
							getDataByGithub();
						}
					} catch (error) {
						console.log(error);
					}
				};
				getAccessToken();
			}
		}
	}, []);

	const getDataByGithub = async () => {
		const response = await axios.get('http://localhost:3001/getDataByGitHub', {
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
			},
		});
		const data = response.data;
		console.log(data);
		loginUser({
			username: data.login,
			name: data.name,
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
