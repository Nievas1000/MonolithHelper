import { colors, Container, Text } from 'design-kit-codojo';
import { SwitchButton } from './SwitchButton';
const ButtonsSwitchZone = () => {
	return (
		<div className='d-flex'>
			<Text variant='two' color={colors.grey.four} mt='6px' mr={16} ml={16}>
				Show
			</Text>
			<Container ml={16}>
				<SwitchButton value={'Interfaces'} />
			</Container>
			<Container ml={32}>
				<SwitchButton value={'Extends'} />
			</Container>
			<Container ml={32}>
				<SwitchButton value={'Tables'} />
			</Container>
		</div>
	);
};

export default ButtonsSwitchZone;
