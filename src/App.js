import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route path='/my-app' element={<Home />} />
				<Route
					path='/'
					element={
						<ProtectedRoute>
							<Login />
						</ProtectedRoute>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
