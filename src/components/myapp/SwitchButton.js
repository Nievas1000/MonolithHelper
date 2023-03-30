import { colors, Text } from 'design-kit-codojo';
import { useSwitchStatus } from '../../hooks/useSwitchStatus';

export const SwitchButton = ({ value }) => {
	const [CustomSwitch, checked, handledCheckedState] = useSwitchStatus();
	return (
		<div className='d-flex'>
			<Text variant='two' color={colors.grey.five} mt={2}>
				{value}
			</Text>
			<CustomSwitch
				checked={checked}
				onChange={() => handledCheckedState(value)}
				name='checked'
				color='primary'
			/>
		</div>
	);
};
