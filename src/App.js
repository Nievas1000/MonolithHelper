import { useState, useEffect } from 'react';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import ConfirmSignUp from './components/ConfirmSignUp';
import ForgotPasswordForm from './components/ForgotPasswordForm';
import { Amplify, Auth } from 'aws-amplify';
import awsmobile from './aws-exports';
import ConfirmForgotPassword from './components/ConfirmForgotPassword';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

Amplify.configure(awsmobile);

function App() {
	const [user, setUser] = useState({
		email: '',
		name: '',
		lastname: '',
		password: '',
		authCode: '',
	});

	useEffect(() => {
		const checkUser = async () => {
			try {
				const userLog = await Auth.currentAuthenticatedUser();
				console.log(userLog.attributes);
			} catch (error) {
				console.log(error);
			}
		};
		checkUser();
	}, []);

	const handleChange = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div className='App'>
			<div className='row'>
				<div className='col-4 container-codojo d-flex justify-content-center align-items-center'>
					<h1>Codojo</h1>
				</div>
				<div className='col-8'>
					<div className='d-flex justify-content-end'>
						<p className='d-flex' role='button' onClick={() => Auth.signOut()}>
							Sign Out
						</p>
					</div>
					<div className='container-form d-flex justify-content-center align-items-center'>
						<div className='zone-form'>
							<Router>
								<Routes>
									<Route
										path='/'
										element={
											<SignInForm user={user} handleChange={handleChange} />
										}
									/>
									<Route
										path='/signup'
										element={
											<SignUpForm user={user} handleChange={handleChange} />
										}
									/>
									<Route
										path='/rocover'
										element={
											<ForgotPasswordForm
												user={user}
												handleChange={handleChange}
											/>
										}
									/>
									<Route
										path='/confirm'
										element={
											<ConfirmSignUp user={user} handleChange={handleChange} />
										}
									/>
									<Route
										path='/confirmforgot'
										element={
											<ConfirmForgotPassword
												user={user}
												handleChange={handleChange}
											/>
										}
									/>
								</Routes>
							</Router>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
