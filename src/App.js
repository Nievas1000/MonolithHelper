import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import ProtectedRoute from './components/ProtectedRoute';



function App() {
	const location = useLocation();
	if (location.pathname === '/') {
		return <Navigate to='/login' />;
	}
	return (
		<div className='App'>
			<Routes>
				<Route
					path='/login'
					element={
						<ProtectedRoute>
							<Login />
						</ProtectedRoute>
					}
				/>
				<Route
					path='/my-app'
					element={
						<ProtectedRoute>
							<Home />
						</ProtectedRoute>
					}
				/>

				<Route
					path='/how-to-add-application'
					element={
						<ProtectedRoute>
							<Home/>
					    </ProtectedRoute>
							
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
