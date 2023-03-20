import {
	colors,
	PersonalZoneTab,
	SettingsIcon,
	SettingsIconActive,
	Text,
} from 'design-kit-codojo';

export const SettingsDropdownUser = ({ setHover, hover }) => {
	return (
		<div>
			{hover.settings ? (
				<PersonalZoneTab
					variant='primary'
					mt={10}
					onMouseEnter={() => setHover({ logout: false, settings: true })}
					onMouseLeave={() => setHover({ logout: false, settings: false })}
					className='setting-drop'
				>
					<SettingsIconActive />
					<Text
						variant='two'
						color={colors.primary.two}
						ml={10}
						mt={11}
						onMouseLeave={() => setHover({ logout: false, settings: false })}
					>
						Settings
					</Text>{' '}
				</PersonalZoneTab>
			) : (
				<PersonalZoneTab
					variant='primary'
					mt={10}
					onMouseEnter={() => setHover({ logout: false, settings: true })}
					className='setting-drop'
				>
					<SettingsIcon />
					<Text
						variant='two'
						color={colors.grey.five}
						ml={10}
						mt={11}
						onMouseEnter={() => setHover({ logout: false, settings: true })}
						onMouseLeave={() => setHover({ logout: false, settings: false })}
					>
						Settings
					</Text>{' '}
				</PersonalZoneTab>
			)}
		</div>
	);
};
