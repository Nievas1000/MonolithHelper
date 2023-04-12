import {
	Subtitle,
	colors,
	Title,
	ButtonText,
	ContainerMenuSettings,
	TabMenuSettings,
	ContainerSettingOpition,
	ContainerDeleteOption,
	Container,
	AccountMaintenanceIcon,
	Button,
} from 'design-kit-codojo';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ModalDeleteAccount from '../components/settings/ModalDeleteAccount';
import { SettingsMobile } from '../components/settings/SettingsMobile';

const Settings = () => {
	const [isOpen, setIsOpen] = useState(false);
	const navigate = useNavigate();
	useEffect(() => {
		document.title = 'Settings | Taffi';
	}, []);
	return (
		<div>
			<div className='container-settings' style={{ position: 'absolute' }}>
				<Subtitle
					variant='one'
					className='cursor'
					color={colors.grey.ten}
					mt={28}
					ml={24}
					onClick={() => navigate(-1)}
				>
					&lt; Back
				</Subtitle>
				<div className='d-flex'>
					<ContainerMenuSettings variant='primary' className='menu-settings'>
						<Title ml={13} mt={24} variant='five' color={colors.grey.ten}>
							Settings
						</Title>
						<TabMenuSettings variant='primary' className='account-maintenance'>
							<Container ml={11} mb={9}>
								<AccountMaintenanceIcon />
							</Container>
							<Subtitle variant='one' color={colors.background.one} ml={11}>
								Account Maintenance
							</Subtitle>
						</TabMenuSettings>
					</ContainerMenuSettings>
					<ContainerSettingOpition
						variant='primary'
						className='menu-settings-options'
					>
						<ContainerDeleteOption
							variant='primary'
							style={{ position: 'relative' }}
						>
							<div className='info-delete'>
								<Subtitle variant='one' color={colors.grey.ten}>
									Delete Account
								</Subtitle>
								<Subtitle variant='two' color={colors.grey.six}>
									There is no going back. Please be certain.
								</Subtitle>
							</div>
							<div className='d-flex align-items-center'>
								<Button
									className='container-delete-account'
									variant='delete'
									onClick={() => setIsOpen(true)}
								>
									<ButtonText
										variant='one'
										mt={11}
										className='delete-account-button'
									>
										Delete
									</ButtonText>
								</Button>
							</div>
						</ContainerDeleteOption>
					</ContainerSettingOpition>
				</div>
			</div>
			<div className='settings-modal'>
				<SettingsMobile setIsOpen={setIsOpen} navigate={navigate} />
			</div>
			{isOpen ? (
				<div className='d-flex justify-content-center align-items-center modal'>
					<ModalDeleteAccount setIsOpen={setIsOpen} />
				</div>
			) : null}
		</div>
	);
};

export default Settings;
