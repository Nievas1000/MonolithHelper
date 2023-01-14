import SignInForm from './components/SignInForm';

function App() {
	return (
		<div className='App'>
			<div className='d-flex'>
				<div className='container-img'>
					<img src='./login.png' />
				</div>
				<div className='sign-in'>
					<SignInForm />
				</div>
			</div>
		</div>
	);
}

export default App;
