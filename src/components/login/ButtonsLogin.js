import {
	ButtonText,
	Container,
	GitHubIcon,
	GoogleIcon,
	LoginButton,
} from 'design-kit-codojo';

export const ButtonsLogin = ({
	activeGithub,
	loginGitHub,
	activeGoogle,
	loginGoogle,
}) => {
	return (
		<Container
			variant='primary'
			className='d-flex justify-content-center box buttons-login'
		>
			{!activeGithub ? (
				<LoginButton variant='primary' mr={24} onClick={loginGitHub}>
					<GitHubIcon />
					<ButtonText variant='two'>Github</ButtonText>
				</LoginButton>
			) : (
				<LoginButton variant='active' mr={24} onClick={loginGitHub}>
					<GitHubIcon />
					<ButtonText variant='two'>Github</ButtonText>
				</LoginButton>
			)}
			{!activeGoogle ? (
				<LoginButton
					variant='primary'
					className='g_id_signin '
					onClick={loginGoogle}
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
	);
};
