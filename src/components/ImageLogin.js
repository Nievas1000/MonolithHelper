import { colors } from '../library/colors';
import { CodojoLogo } from '../library/icons';
import { Container, Subtitle, Text, Title } from '../library/theme';

const ImageLogin = () => {
	return (
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
							px={2}
						>
							Monolith to microservices in 60 seconds
						</Subtitle>
					</Container>
				</div>
			</div>
			<img src='./login.png' />
		</div>
	);
};

export default ImageLogin;
