import {
	Button,
	CrossIconRed,
	CrossIconWhite,
	CheckIconGreen,
	CheckIconWhite,
	Container,
} from 'design-kit-codojo';
import { useState } from 'react';
import { useDeleteApp } from '../../hooks/useDeleteApp';

export const ButtonsModalDeleteApp = ({ setIsOpen, setClose }) => {
	const [hover, setHover] = useState({ confirm: false, cancel: false });
	const [deletedApp] = useDeleteApp();
	const closeAll = () => {
		setClose(false);
		setIsOpen(false);
	};
	const confirDeleted = () => {
		deletedApp();
		closeAll();
	};
	return (
		<Container className='d-flex justify-content-center' mt={25}>
			{hover.cancel ? (
				<Button
					variant='delete'
					onClick={closeAll}
					onMouseLeave={() => setHover({ confirm: false, cancel: false })}
				>
					<CrossIconWhite />
				</Button>
			) : (
				<Button
					variant='delete'
					onMouseEnter={() => setHover({ confirm: false, cancel: true })}
				>
					<CrossIconRed
						onMouseEnter={() => setHover({ confirm: false, cancel: true })}
					/>
				</Button>
			)}

			{hover.confirm ? (
				<Button
					variant='confirm'
					onMouseLeave={() => setHover({ confirm: false, cancel: false })}
					onClick={confirDeleted}
				>
					<CheckIconWhite />
				</Button>
			) : (
				<Button
					variant='confirm'
					onMouseEnter={() => setHover({ confirm: true, cancel: false })}
				>
					<CheckIconGreen />
				</Button>
			)}
		</Container>
	);
};
