import {
	colors,
	LogOutIcon,
	LogoutIconActive,
	PersonalZoneTab,
	Text,
} from 'design-kit-codojo';

export const LogoutDropdownUser = ({ setHover, hover }) => {
	const handleLogout = () => {
		localStorage.clear();
		window.location.href = 'https://www.codojo.io/';
	};
	return (
		<div>
			{hover.logout ? (
				<PersonalZoneTab
					variant='primary'
					onClick={handleLogout}
					mt={58}
					className='setting-drop'
					onMouseLeave={() => setHover({ logout: false, settings: false })}
				>
					<LogoutIconActive />
					<Text variant='two' color={colors.primary.two} ml={10} mt={11}>
						Sign Out
					</Text>{' '}
				</PersonalZoneTab>
			) : (
				<PersonalZoneTab
					variant='primary'
					onClick={handleLogout}
					mt={58}
					className='setting-drop'
					onMouseEnter={() => setHover({ logout: true, settings: false })}
				>
					<LogOutIcon />
					<Text variant='two' color={colors.grey.five} ml={10} mt={11}>
						Sign Out
					</Text>{' '}
				</PersonalZoneTab>
			)}
		</div>
	);
};
