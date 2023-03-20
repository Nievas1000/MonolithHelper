import { Text, TextLink } from 'design-kit-codojo';
import ImageLogin from '../components/login/ImageLogin';
import SignInForm from '../components/login/SignInForm';

const Login = () => {
	return (
		<div className='d-flex'>
			<ImageLogin />
			<div className='container-information'>
				<div className='sign-in d-flex'>
					<SignInForm />
				</div>
				<div className='d-flex justify-content-center container-policies'>
					<Text variant='one' ml={24} mr={24}>
						By logging in or signing up, you agree to abide by our policies
						including our{' '}
						<TextLink variant='one' href='https://www.codojo.io/use-policy'>
							Use Policy
						</TextLink>{' '}
						and{' '}
						<TextLink variant='one' href='https://www.codojo.io/privacy'>
							Privacy Policy
						</TextLink>
					</Text>
				</div>
			</div>
		</div>
	);
};

export default Login;
