import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
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
	return children;
};

export default ProtectedRoute;
