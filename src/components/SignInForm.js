import useLoginGithub from '../hooks/useLoginGithub';
import {
	Title,
	Subtitle,
	Text,
	Container,
	LoginButton,
	colors,
	GitHubIcon,
	GoogleIcon,
	ButtonText,
} from 'design-kit-codojo';

const SignInForm = () => {
	const [loginWithGitHub, activeGithub, setActiveGithub] = useLoginGithub();

	const selectGithub = () => {
		loginWithGitHub();
		setActiveGithub(!activeGithub);
	};

	return (
		<div>
			<Title className='d-flex justify-content-center' variant='four' mb={2}>
				Get started for free
			</Title>
			<Subtitle
				className='d-flex justify-content-center'
				variant='two'
				color={colors.background.ten}
				mb={32}
			>
				No credit card required
			</Subtitle>
			<Text
				className='d-flex justify-content-center'
				variant='two'
				color={colors.grey.five}
				mb={16}
			>
				Sign it with
			</Text>
			<Container variant='primary' className='d-flex justify-content-center'>
				{!activeGithub ? (
					<LoginButton variant='primary' mr={24} onClick={selectGithub}>
						<GitHubIcon />
						<ButtonText variant='two'>Github</ButtonText>
					</LoginButton>
				) : (
					<LoginButton variant='active' mr={24} onClick={selectGithub}>
						<GitHubIcon />
						<ButtonText variant='two'>Github</ButtonText>
					</LoginButton>
				)}
				<LoginButton variant='primary'>
					<GoogleIcon />
					<ButtonText variant='two'>Google</ButtonText>
				</LoginButton>
			</Container>
		</div>
	);
};

export default SignInForm;
