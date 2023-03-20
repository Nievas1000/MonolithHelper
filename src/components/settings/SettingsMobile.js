import {
	ButtonText,
	colors,
	Container,
	DeleteAccountButton,
	Subtitle,
	Title,
} from 'design-kit-codojo';
import Navbar from '../navbar/NavBar';

export const SettingsMobile = ({ setIsOpen, navigate }) => {
	return (
		<div>
			<Navbar settings={true} />
			<Container ml={32}>
				<div style={{ position: 'absolute' }}>
					<Subtitle
						variant='one'
						color={colors.grey.ten}
						mt={28}
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
						Once you delete your account, there is no going back. Please be
						certain.
					</Subtitle>
					<DeleteAccountButton
						className='container-delete-account'
						variant='primary'
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
					</DeleteAccountButton>
				</div>
			</Container>
		</div>
	);
};
