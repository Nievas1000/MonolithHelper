import { Container, Text, colors } from 'design-kit-codojo';
import { useState } from 'react';
import open from '../../../utils/imgIcons/open.png';
import close from '../../../utils/imgIcons/back.png';
import { useSelector } from 'react-redux';

export const DropdownList = ({ setApi, api }) => {
	const app = useSelector((state) => state.selectedApp);
	const [isOpen, setIsOpen] = useState(true);

	const handleClose = () => {
		setIsOpen(!isOpen);
	};
	return (
		<Container className='container-list-apis'>
			<Container
				className={`d-flex list-apis ${isOpen ? '' : 'closed'}`}
				mt={108}
			>
				<Container mt='8px' ml={29}>
					<Text variant='one' color={colors.grey.nine}>
						Refactoring Resources
					</Text>
					<Text
						variant='two'
						color={api ? colors.primary.two : colors.grey.seven}
						className='cursor'
						onClick={() => setApi(true)}
					>
						{app.endpoints[0].length} Endpoints
					</Text>
					<Text
						variant='two'
						color={colors.grey.seven}
						className='cursor'
						onClick={() => setApi(false)}
					>
						Go back to the graphic
					</Text>
				</Container>
				<div className='d-flex align-items-center container-close'>
					{isOpen ? (
						<img onClick={handleClose} src={close} height={15} width={15} />
					) : (
						<img onClick={handleClose} src={open} height={15} width={15} />
					)}
				</div>
			</Container>
		</Container>
	);
};
