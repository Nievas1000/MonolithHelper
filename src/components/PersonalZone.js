import {
	ArrowIcon,
	colors,
	Settings,
	Text,
	UserIcon,
	UserTab,
} from 'design-kit-codojo';

const PersonalZone = () => {
	return (
		<div className='right-navbar'>
			<Settings>
				<Text variant='three' color={colors.grey.five} mt={12}>
					Settings
				</Text>
			</Settings>
			<UserTab className='user'>
				<UserIcon />
				<ArrowIcon />
			</UserTab>
		</div>
	);
};

export default PersonalZone;
