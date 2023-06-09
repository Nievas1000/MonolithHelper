import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import ProtectedRoute from './components/ProtectedRoute';
import Settings from './pages/settings';

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
							<Home dataUrl={'my-app'} />
						</ProtectedRoute>
					}
				/>

				<Route
					path='/how-to-add-application'
					element={
						<ProtectedRoute>
							<Home />
						</ProtectedRoute>
					}
				/>
				<Route
					path='/api'
					element={
						<ProtectedRoute>
							<Home dataUrl={'api'} />
						</ProtectedRoute>
					}
				/>
				<Route
					path='/datastores'
					element={
						<ProtectedRoute>
							<Home dataUrl={'datastores'} />
						</ProtectedRoute>
					}
				/>
				<Route
					path='/settings'
					element={
						<ProtectedRoute>
							<Settings />
						</ProtectedRoute>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
