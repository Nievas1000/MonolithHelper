import { colors, Container, MoreIcon, Text } from 'design-kit-codojo';
import useDropdown from '../../../hooks/useDropdown';
import { DeleteApplication } from '../deleteApp/DeleteApplication';
import { SwitchButton } from './SwitchButton';
const ButtonsSwitchZone = () => {
	const [showDropdow, setShowDropdown, divRefSon, divRefFather] = useDropdown();
	return (
		<div className='d-flex justify-content-center '>
			<Container ml={33} className='interface-switch'>
				<SwitchButton value={'Interfaces'} />
			</Container>
			<Container ml={32} className='datastore-switch'>
				<SwitchButton value={'Datastores'} />
			</Container>
			<Container className='cursor switch-more' ml={34} mt={11}>
				<Container
					className='d-flex'
					onClick={() => setShowDropdown(!showDropdow)}
					ref={divRefFather}
				>
					<MoreIcon />
					<Text variant='two' color={colors.primary.two} ml={10} mt='-3px'>
						More...
					</Text>
				</Container>
				{showDropdow ? (
					<div ref={divRefSon}>
						<DeleteApplication setClose={setShowDropdown} />
					</div>
				) : null}
			</Container>
		</div>
	);
};

export default ButtonsSwitchZone;
