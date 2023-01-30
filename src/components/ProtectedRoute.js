import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
	return <Navigate to='/login' />;
};

export default ProtectedRoute;
