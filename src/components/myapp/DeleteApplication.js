import {
	Container,
	DeleteAccountIcon,
	DeleteAplicationTab,
	ModalDeleteAplication,
	Text,
	Subtitle,
	colors,
} from 'design-kit-codojo';
import { ButtonsModalDeleteApp } from './ButtonsModalDeleteApp';
import useDropdown from '../../hooks/useDropdown';

export const DeleteApplication = ({ setClose }) => {
	const [showDropdow, setShowDropdown, divRefSon, divRefFather] = useDropdown();
	return (
		<div>
			<DeleteAplicationTab
				variant='primary'
				mt='-10px'
				onClick={() => setShowDropdown(!showDropdow)}
				ref={divRefFather}
			>
				<Text variant='two' mt={11} ml={17}>
					Delete Application
				</Text>
			</DeleteAplicationTab>
			{showDropdow ? (
				<div className='d-flex justify-content-center align-items-center modal'>
					<ModalDeleteAplication variant='primary' ref={divRefSon}>
						<Container className='d-flex' mt={32} ml={32}>
							<DeleteAccountIcon />
							<Subtitle
								variant='one'
								color={colors.grey.ten}
								mt='-4px'
								ml='8px'
							>
								Delete Application
							</Subtitle>
						</Container>
						<Text variant='one' color={colors.grey.six} ml={36}>
							This application data will be destroyed via a paper shredder.
						</Text>
						<Text variant='one' color={colors.grey.six} ml={36} mt='-15px'>
							This action is permanent and cannot be undone.
						</Text>
						<ButtonsModalDeleteApp
							setShowDropdown={setShowDropdown}
							setClose={setClose}
						/>
					</ModalDeleteAplication>
				</div>
			) : null}
		</div>
	);
};
