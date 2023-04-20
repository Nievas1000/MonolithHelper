import {
	ButtonText,
	Container,
	GitHubIcon,
	GoogleIcon,
	LoginButton,
} from 'design-kit-codojo';

export const MobileButtonsLogin = ({
	activeGithub,
	loginGitHub,
	activeGoogle,
	loginGoogle,
}) => {
	return (
		<Container
			variant='primary'
			className='d-flex justify-content-center box buttons-login-mobile'
		>
			{!activeGithub ? (
				<LoginButton
					variant='mobile'
					mr={24}
					onClick={loginGitHub}
					className='mobile_inactive'
				>
					<GitHubIcon />
					<ButtonText variant='two'>Github</ButtonText>
				</LoginButton>
			) : (
				<LoginButton
					variant='mobile_active'
					mr={24}
					onClick={loginGitHub}
					className='mobile_active'
				>
					<GitHubIcon />
					<ButtonText variant='two'>Github</ButtonText>
				</LoginButton>
			)}
			{!activeGoogle ? (
				<LoginButton
					variant='mobile'
					className='g_id_signin mobile_inactive'
					onClick={loginGoogle}
				>
					<GoogleIcon />
					<ButtonText variant='two'>Google</ButtonText>
				</LoginButton>
			) : (
				<LoginButton variant='mobile_active' className='mobile_active'>
					<GoogleIcon />
					<ButtonText variant='two'>Google</ButtonText>
				</LoginButton>
			)}
		</Container>
	);
};
