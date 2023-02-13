import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import ProtectedRoute from './components/ProtectedRoute';
import InfoApp from './components/InfoApp';




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

						<Home />

					}
				/>

				<Route
					path='/how-to-add-application'
					element={

						
							

							<InfoApp />
						

					}
				/>




			</Routes>
		</div>
	);
}

export default App;
