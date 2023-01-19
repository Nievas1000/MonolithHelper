import ImageLogin from './components/ImageLogin';
import SignInForm from './components/SignInForm';
import { Text, TextLink } from 'design-kit-codojo';

function App() {
	return (
		<div className='App'>
			<div className='d-flex'>
				<ImageLogin />
				<div className='container-information'>
					<div className='sign-in'>
						<SignInForm />
					</div>
					<div className='d-flex justify-content-center'>
						<Text variant='one'>
							By logging in or signing up, you agree to abide by our policies
							including our <TextLink variant='one'>Use Policy</TextLink> and{' '}
							<TextLink variant='one'>Privacy Policy</TextLink>
						</Text>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
