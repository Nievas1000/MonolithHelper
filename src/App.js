import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import ConfirmSignUp from './components/ConfirmSignUp';
import ForgotPasswordForm from './components/ForgotPasswordForm';
import ConfirmForgotPassword from './components/ConfirmForgotPassword';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<div className='row'>
				<div className='col-4 container-codojo d-flex'>
					<img src='./login.png' />
				</div>
				<div className='col-8'>
					<div className='container-form d-flex justify-content-center align-items-center'>
						<div className='zone-form'>
							<Router>
								<Routes>
									<Route path='/' element={<SignInForm />} />
									<Route path='/signup' element={<SignUpForm />} />
									<Route path='/rocover' element={<ForgotPasswordForm />} />
									<Route path='/confirm' element={<ConfirmSignUp />} />
									<Route
										path='/confirmforgot'
										element={<ConfirmForgotPassword />}
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
