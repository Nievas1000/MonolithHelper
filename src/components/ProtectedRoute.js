import axios from 'axios';
import { useState, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAddapp } from '../hooks/useAddapp';
import { useDispatch} from 'react-redux';




const ProtectedRoute = ({ children }) => {
	const [addApplication] = useAddapp();
	const userApplicationKey = localStorage.getItem('userAppKey');
	const [userExist, setUserExist] = useState(false);
	const dispatch = useDispatch();

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
					if (response.data.message === 'User exist!') {
						setUserExist(true);
						
					}
				} catch (error) {
					setUserExist(false);
				}
			} else {
				return <Navigate to='/login' />;
			}
		};
		getUser();
	}, []);
	const location = useLocation();
	if (
		(userExist && location.pathname === '/login' && userApplicationKey) ||
		location.pathname === '/'
	) {
		
		return <Navigate to='/my-app' />;
	}
	if (!userExist && location.pathname !== '/login' && !userApplicationKey) {
		if(location.pathname==='/how-to-add-application'){
			dispatch({
				type: 'URL',
				url: '/how-to-add-application',
			});

		}
		return <Navigate to='/login' />;
	}

	
	if (userApplicationKey && location.pathname === '/how-to-add-application') {

		addApplication();
		
	}


	return children;
};

export default ProtectedRoute;
