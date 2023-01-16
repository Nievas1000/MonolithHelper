import {
	ButtonText,
	Container,
	LoginButton,
	Subtitle,
	Text,
	Title,
} from '../library/theme';
import GitHubIcon from '@mui/icons-material/GitHub';
import { colors } from '../library/colors';
import { GoogleIcon } from '../library/icons';

const SignInForm = () => {
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
				<LoginButton variant='primary' mr={24}>
					<GitHubIcon />
					<ButtonText variant='two'>Github</ButtonText>
				</LoginButton>
				<LoginButton variant='primary'>
					<GoogleIcon />
					<ButtonText variant='two'>Google</ButtonText>
				</LoginButton>
			</Container>
			{/* <a href='./app/Codojo.jar' download>
				Download
			</a> */}
		</div>
	);
};

export default SignInForm;
