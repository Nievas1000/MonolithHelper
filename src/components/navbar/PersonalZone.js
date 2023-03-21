import {
	ArrowIconExpand,
	ContainerPersonalZone,
	UserIcon,
	UserTab,
} from 'design-kit-codojo';
import { useState } from 'react';
/* import { NavLink } from 'react-router-dom'; */
import { LogoutDropdownUser } from './LogoutDropdownUser';
/* import { SettingsDropdownUser } from './SettingsDropdownUser'; */

const PersonalZone = () => {
	const [activeLogout, setActiveLogout] = useState(false);
	const [hover, setHover] = useState({ logout: false, settings: false });

	return (
		<div className='right-navbar'>
			<UserTab className='user' onClick={() => setActiveLogout(!activeLogout)}>
				<UserIcon />
				<ArrowIconExpand />
			</UserTab>
			{activeLogout ? (
				<div className='signout'>
					<ContainerPersonalZone className='container-personal'>
						{/* <SettingsDropdownUser setHover={setHover} hover={hover} />
						<hr className='line-personal' /> */}
						<LogoutDropdownUser setHover={setHover} hover={hover} />
					</ContainerPersonalZone>
				</div>
			) : null}
		</div>
	);
};

export default PersonalZone;
