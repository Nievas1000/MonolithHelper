import { Navigate, useLocation } from 'react-router-dom';
import { useAddapp } from '../hooks/useAddapp';




const ProtectedRoute = ({ children }) => {
	const [addApplication] = useAddapp();
	const userApplicationKey = localStorage.getItem('userAppKey');
	const location = useLocation();
	if (
		(userApplicationKey && location.pathname === '/login') ||
		location.pathname === '/'
	) {
		return <Navigate to='/my-app' />;
	}
	if (!userApplicationKey && location.pathname !== '/login') {
		return <Navigate to='/login' />;
	}

	
	if (userApplicationKey && location.pathname === '/how-to-add-application') {

		addApplication();
		
	}

	return children;
};

export default ProtectedRoute;
