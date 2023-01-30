import {
	Title,
	colors,
	Subtitle,
	Text,
	Container,
	LoginButton,
	GoogleIcon,
	ButtonText,
	GitHubIcon,
} from 'design-kit-codojo';
import useLoginGithub from '../hooks/useLoginGithub';
import useLoginGoogle from '../hooks/useLoginGoogle';

const SignInForm = () => {
	const [loginWithGitHub, activeGithub, setActiveGithub] = useLoginGithub();
	const [login, activeGoogle, setActiveGoogle] = useLoginGoogle();

	const selectGoogle = () => {
		setActiveGoogle(true);
		login();
	};

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
			<Container
				variant='primary'
				className='d-flex justify-content-center box'
			>
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
				{!activeGoogle ? (
					<LoginButton
						variant='primary'
						className='g_id_signin'
						onClick={() => selectGoogle()}
					>
						<GoogleIcon />
						<ButtonText variant='two'>Google</ButtonText>
					</LoginButton>
				) : (
					<LoginButton variant='active'>
						<GoogleIcon />
						<ButtonText variant='two'>Google</ButtonText>
					</LoginButton>
				)}
			</Container>
		</div>
	);
};

export default SignInForm;
