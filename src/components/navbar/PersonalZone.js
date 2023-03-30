import {
	ArrowIconExpand,
	ContainerPersonalZone,
	UserIcon,
	UserTab,
} from 'design-kit-codojo';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useDropdown from '../../hooks/useDropdown';
import { LogoutDropdownUser } from './LogoutDropdownUser';
import { SettingsDropdownUser } from './SettingsDropdownUser';

const PersonalZone = () => {
	const [showDropdow, setShowDropdown, divRefSon, divRefFather] = useDropdown();
	const [hover, setHover] = useState({ logout: false, settings: false });

	return (
		<div className='right-navbar'>
			<UserTab
				className='user'
				onClick={() => setShowDropdown(!showDropdow)}
				ref={divRefFather}
			>
				<UserIcon />
				<ArrowIconExpand />
			</UserTab>
			{showDropdow ? (
				<div className='signout' ref={divRefSon}>
					<ContainerPersonalZone className='container-personal'>
						<NavLink to='/settings'>
							<SettingsDropdownUser setHover={setHover} hover={hover} />
						</NavLink>
						<hr className='line-personal' />
						<LogoutDropdownUser setHover={setHover} hover={hover} />
					</ContainerPersonalZone>
				</div>
			) : null}
		</div>
	);
};

export default PersonalZone;
