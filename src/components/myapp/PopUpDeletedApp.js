import {
	colors,
	Container,
	ContainerDeletedConfirm,
	Text,
	CheckIconWhite,
} from 'design-kit-codojo';
import { useSelector } from 'react-redux';

export const PopUpDeletedApp = () => {
	const show = useSelector((state) => state.deletedApp);
	return (
		<div>
			{show ? (
				<div className='message-deleted-app'>
					<ContainerDeletedConfirm variant='primary' mr={50}>
						<Container className='d-flex' mt={18} ml={12}>
							<CheckIconWhite />
							<Text variant='two' color={colors.grey.ten} ml={12} mt='-3px'>
								Your application was deleted!
							</Text>
						</Container>
					</ContainerDeletedConfirm>
				</div>
			) : null}
		</div>
	);
};
