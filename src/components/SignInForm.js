import { ButtonText, GoogleIcon, LoginButton, Title } from '../library/theme';
import GitHubIcon from '@mui/icons-material/GitHub';

const SignInForm = () => {
	return (
		<div>
			<div className='d-flex justify-content-center'>
				<Title variant='four'>Get started for free</Title>
			</div>
			<div className='buttons-login'>
				<LoginButton variant='primary'>
					<GitHubIcon />
					<ButtonText variant='two'>Github</ButtonText>
				</LoginButton>
				<LoginButton variant='primary'>
					<GoogleIcon />
					<ButtonText variant='two'>Github</ButtonText>
				</LoginButton>
			</div>
			{/* <a href='./app/Codojo.jar' download>
				Download
			</a> */}
		</div>
	);
};

export default SignInForm;
