import {
	Container,
	CodojoLogo,
	Title,
	colors,
	Text,
	Subtitle,
} from 'design-kit-codojo';

const ImageLogin = () => {
	return (
		<div className='container-img'>
			<div className='login-image-header'>
				<Container
					className='d-flex justify-content-center align-items-center'
					variant='center'
					mt={80}
				>
					<CodojoLogo />
				</Container>
				<Container
					className='d-flex justify-content-center align-items-center'
					variant='center'
				>
					<Title variant='two' color={colors.grey.ten} className='logo-login'>
						Codojo
					</Title>
				</Container>
				<Container
					className='d-flex justify-content-center align-items-center'
					variant='center'
					mt={12}
				>
					<Text variant='one' color={colors.grey.ten} className='logo-login'>
						The Platform for Software Architects
					</Text>
				</Container>
				<div className='d-flex justify-content-center monolithTo'>
					<Container
						className='d-flex justify-content-center align-items-center'
						variant='center'
						mb={56}
					>
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
