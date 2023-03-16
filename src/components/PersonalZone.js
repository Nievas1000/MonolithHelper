import {
	ArrowIconExpand,
	colors,
	ContainerPersonalZone,
	LogOutIcon,
	/* Settings, */
	Text,
	UserIcon,
	UserTab,
} from 'design-kit-codojo';
import { useState } from 'react';

const PersonalZone = () => {
	const [activeLogout, setActiveLogout] = useState(false);
	const handleLogout = () => {
		localStorage.clear();
		window.location.href = 'https://www.codojo.io/';
	};
	return (
		<div className='right-navbar'>
			{/* <Settings className='settigns'>
				<Text variant='three' color={colors.grey.five} mt={12}>
					Settings
				</Text>
			</Settings> */}
			<UserTab className='user' onClick={() => setActiveLogout(!activeLogout)}>
				<UserIcon />
				<ArrowIconExpand />
			</UserTab>
			{activeLogout ? (
				<div className='signout' onClick={handleLogout}>
					<ContainerPersonalZone className='moment'>
						<Text variant='two' color={colors.grey.six} ml={14}>
							<LogOutIcon />
							Sign Out
						</Text>{' '}
					</ContainerPersonalZone>
				</div>
			) : null}
		</div>
	);
};

export default PersonalZone;
