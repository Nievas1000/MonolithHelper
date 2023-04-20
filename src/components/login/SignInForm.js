import { Title, colors, Subtitle, Text } from 'design-kit-codojo';
import useLoginGithub from '../../hooks/useLoginGithub';
import useLoginGoogle from '../../hooks/useLoginGoogle';
import { MobileButtonsLogin } from './MobileButtonsLogin';
import { ButtonsLogin } from './ButtonsLogin';

const SignInForm = () => {
	const [loginGitHub, activeGithub] = useLoginGithub();
	const [loginGoogle, activeGoogle] = useLoginGoogle();
	return (
		<div>
			<Title
				className='d-flex justify-content-center text-mobile-login'
				variant='four'
				mb={2}
			>
				Get started for free
			</Title>
			<Subtitle
				className='d-flex justify-content-center text-mobile-login'
				variant='two'
				color={colors.background.ten}
				mb={32}
			>
				No credit card required
			</Subtitle>
			<Text
				className='d-flex justify-content-center text-mobile-login'
				variant='two'
				color={colors.grey.five}
				mb={16}
			>
				Sign it with
			</Text>
			<ButtonsLogin
				activeGithub={activeGithub}
				loginGitHub={loginGitHub}
				activeGoogle={activeGoogle}
				loginGoogle={loginGoogle}
			/>
			<MobileButtonsLogin
				activeGithub={activeGithub}
				loginGitHub={loginGitHub}
				activeGoogle={activeGoogle}
				loginGoogle={loginGoogle}
			/>
		</div>
	);
};

export default SignInForm;
