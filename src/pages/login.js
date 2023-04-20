import {
	Container,
	Text,
	TextLink,
	TopLoginIcon,
	BottomLoginIcon,
	TaffiIcon,
} from 'design-kit-codojo';
import ImageLogin from '../components/login/ImageLogin';
import SignInForm from '../components/login/SignInForm';

const Login = () => {
	return (
		<div className='d-flex'>
			<ImageLogin />
			<Container className='container-information'>
				<div className='gradient-top-right'>
					<TopLoginIcon />{' '}
				</div>
				<div className='gradient-bottom-left'>
					<BottomLoginIcon />{' '}
				</div>
				<Container
					className='d-flex justify-content-center align-items-center icon-taffi-mobile'
					mt={142}
				>
					<TaffiIcon />
				</Container>
				<Container className='sign-in d-flex'>
					<SignInForm />
				</Container>
				<div className='d-flex justify-content-center container-policies'>
					<Text variant='one' ml={24} mr={24} className='text-mobile-login'>
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
			</Container>
		</div>
	);
};

export default Login;
