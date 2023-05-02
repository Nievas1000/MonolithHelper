import { Container, Text, Title, colors } from 'design-kit-codojo';
import { useEffect } from 'react';

export const NoApisModal = ({ setApi }) => {
	useEffect(() => {
		history.pushState(null, '', 'api');
	}, []);
	return (
		<Container
			className='d-flex justify-content-center align-items-center non-apis'
			mt={144}
		>
			<Container className='container-modal-nonapis'>
				<Title
					variant='six'
					className='d-flex justify-content-center'
					color={colors.grey.ten}
					mt={34}
				>
					We didnt find any APIs in the application
				</Title>
				<div className='d-flex justify-content-center'>
					<Container
						className='align-items-center back-modal-nonapis cursor'
						mt={15}
						onClick={() => setApi(false)}
					>
						<Text variant='two' color={colors.primary.two} mt={13}>
							Go back to the graphic
						</Text>
					</Container>
				</div>
			</Container>
		</Container>
	);
};
