import SignInForm from './components/SignInForm';
import { colors } from './library/colors';
import { CodojoLogo } from './library/icons';
import { Container, Subtitle, Text, TextLink, Title } from './library/theme';

function App() {
	return (
		<div className='App'>
			<div className='d-flex'>
				<div className='container-img'>
					<div className='login-image-header'>
						<Container variant='center' mt={80}>
							<CodojoLogo />
						</Container>
						<Container variant='center'>
							<Title variant='two' color={colors.grey.ten}>
								Codojo
							</Title>
						</Container>
						<Container variant='center' mt={12}>
							<Text variant='two' color={colors.grey.ten}>
								The platform for Software Architects
							</Text>
						</Container>
						<div className='d-flex justify-content-center monolithTo'>
							<Container variant='center' mb={56}>
								<Subtitle
									variant='one'
									color={colors.grey.ten}
									backgroundColor={colors.secondary.two}
									borderRadius={4}
								>
									Monolith to microservices in 60 seconds
								</Subtitle>
							</Container>
						</div>
					</div>
					<img src='./login.png' />
				</div>
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
