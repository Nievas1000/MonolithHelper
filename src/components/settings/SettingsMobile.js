import {
	Button,
	ButtonText,
	colors,
	Container,
	Subtitle,
	Title,
} from 'design-kit-codojo';

export const SettingsMobile = ({ setIsOpen, navigate }) => {
	return (
		<div>
			<Container ml={32}>
				<div style={{ position: 'absolute' }}>
					<Subtitle
						variant='one'
						color={colors.grey.ten}
						mt={60}
						onClick={() => navigate(-1)}
					>
						&lt; Back
					</Subtitle>
					<Title variant='six' color={colors.grey.ten} mt={24}>
						Settings
					</Title>
					<Subtitle variant='one' color={colors.primary.two} mt={12}>
						Account Maintenance
					</Subtitle>
					<div>
						<hr className='line-settings' />
					</div>
					<Subtitle variant='two' color={colors.grey.ten} mt='7px'>
						Delete my account
					</Subtitle>
					<Subtitle variant='two' color={colors.grey.ten}>
						There is no going back. Please be certain.
					</Subtitle>
					<Button
						className='container-delete-account'
						variant='delete'
						onClick={() => setIsOpen(true)}
						mt={16}
					>
						<ButtonText
							variant='one'
							mt={11}
							color={colors.feedback.error}
							className='delete-account-button'
						>
							Delete
						</ButtonText>
					</Button>
				</div>
			</Container>
		</div>
	);
};
