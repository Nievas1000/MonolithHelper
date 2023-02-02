import {
	ArrowIcon,
	colors,
	ContainerSignOut,
	Settings,
	Text,
	UserIcon,
	UserTab,
} from 'design-kit-codojo';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PersonalZone = () => {
	const [activeLogout, setActiveLogout] = useState(false);
	const navigate = useNavigate();
	const handleLogout = () => {
		localStorage.clear();
		navigate('/login');
	};
	return (
		<div className='right-navbar'>
			<Settings className='settigns'>
				<Text variant='three' color={colors.grey.five} mt={12}>
					Settings
				</Text>
			</Settings>
			<UserTab className='user' onClick={() => setActiveLogout(!activeLogout)}>
				<UserIcon />
				<ArrowIcon />
			</UserTab>
			{activeLogout ? (
				<div className='signout'>
					<ContainerSignOut onClick={handleLogout}>
						<Text variant='two' color={colors.grey.six} ml={14}>
							Sign Out
						</Text>{' '}
					</ContainerSignOut>
				</div>
			) : null}
		</div>
	);
};

export default PersonalZone;
