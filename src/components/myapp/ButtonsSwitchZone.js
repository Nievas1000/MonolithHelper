import { colors, Container, MoreIcon, Text } from 'design-kit-codojo';
import { useState } from 'react';
import { DeleteApplication } from './DeleteApplication';
import { SwitchButton } from './SwitchButton';
const ButtonsSwitchZone = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className='d-flex'>
			<Container ml={33}>
				<SwitchButton value={'Interfaces'} />
			</Container>
			<Container ml={32}>
				<SwitchButton value={'Tables'} />
			</Container>
			<Container className='cursor' ml={34} mt={11}>
				<Container className='d-flex' onClick={() => setIsOpen(!isOpen)}>
					<MoreIcon />
					<Text variant='two' color={colors.primary.two} ml={10} mt='-3px'>
						More...
					</Text>
				</Container>
				{isOpen ? <DeleteApplication setClose={setIsOpen} /> : null}
			</Container>
		</div>
	);
};

export default ButtonsSwitchZone;
