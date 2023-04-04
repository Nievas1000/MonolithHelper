import axios from 'axios';
import { useState, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAddapp } from '../hooks/useAddapp';




const ProtectedRoute = ({ children }) => {
	const [addApplication] = useAddapp();
	const userApplicationKey = localStorage.getItem('userAppKey');
	const [userExist, setUserExist] = useState(false);
	useEffect(() => {
		const getUser = async () => {
			if (userApplicationKey) {
				try {
					const response = await axios.post(
						`${process.env.REACT_APP_API_URL}/getUserToApp`,
						{
							code: userApplicationKey,
						},
						{
							headers: {
								'x-api-key': process.env.REACT_APP_API_GATEWAY_TOKEN,
							},
						}
					);
					console.log(response);
					if (response.data.message === 'User exist!') {
						setUserExist(true);
					}
				} catch (error) {
					setUserExist(false);
				}
			}
		};
		getUser();
	});
	const location = useLocation();
	if (
		(userExist && location.pathname === '/login') ||
		location.pathname === '/'
	) {
		return <Navigate to='/my-app' />;
	}
	if (!userExist && location.pathname !== '/login') {
		return <Navigate to='/login' />;
	}

	
	if (userApplicationKey && location.pathname === '/how-to-add-application') {

		addApplication();
		
	}

	return children;
};

export default ProtectedRoute;
