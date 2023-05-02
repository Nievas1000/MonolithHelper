import {
	BurgerMenuIcon,
	Container,
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
import { UserMenuMobile } from './UserMenuMobile';

const PersonalZone = () => {
	const [showDropdow, setShowDropdown, divRefSon, divRefFather] = useDropdown();
	const [hover, setHover] = useState({ logout: false, settings: false });

	return (
		<div className='right-navbar'>
			<div onClick={() => setShowDropdown(!showDropdow)} ref={divRefFather}>
				<UserTab className='user'>
					<UserIcon />
					<ArrowIconExpand />
				</UserTab>
				<Container mr={20} mt='2px' className='user-mobile'>
					<BurgerMenuIcon />
				</Container>
			</div>
			{showDropdow ? (
				<div ref={divRefSon}>
					<div className='signout'>
						<ContainerPersonalZone className='container-personal'>
							<NavLink to='/settings'>
								<SettingsDropdownUser setHover={setHover} hover={hover} />
							</NavLink>
							<hr className='line-personal' />
							<LogoutDropdownUser setHover={setHover} hover={hover} />
						</ContainerPersonalZone>
					</div>
					<UserMenuMobile
						setShowDropdown={setShowDropdown}
						showDropdow={showDropdow}
					/>
				</div>
			) : null}
		</div>
	);
};

export default PersonalZone;
