import {
	Container,
	DeleteAccountIcon,
	DeleteAplicationTab,
	ModalDeleteAplication,
	Text,
	Subtitle,
	colors,
} from 'design-kit-codojo';
import { useState } from 'react';
import { ButtonsModalDeleteApp } from './ButtonsModalDeleteApp';

export const DeleteApplication = ({ setClose }) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div>
			<DeleteAplicationTab
				variant='primary'
				mt='-10px'
				onClick={() => setIsOpen(!isOpen)}
			>
				<Text variant='two' mt={11} ml={17}>
					Delete Application
				</Text>
			</DeleteAplicationTab>
			{isOpen ? (
				<div className='d-flex justify-content-center align-items-center modal'>
					<ModalDeleteAplication variant='primary'>
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
						<ButtonsModalDeleteApp setIsOpen={setIsOpen} setClose={setClose} />
					</ModalDeleteAplication>
				</div>
			) : null}
		</div>
	);
};
