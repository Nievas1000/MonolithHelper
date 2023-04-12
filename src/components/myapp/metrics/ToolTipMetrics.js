import { Container, Text, colors } from 'design-kit-codojo';

export const ToolTipMetrics = (props) => {
	const handleClass = (classe) => {
		if (props.execute) {
			props.dispatch({
				type: 'SELECT_CLASS',
				payload: classe,
			});
		}
	};
	return (
		<div className='d-flex justify-content-center mb-4'>
			<Container
				className='container-classes-metric'
				bg={colors.background.eight}
			>
				<div className='d-flex justify-content-center align-items-center'>
					<Text variant='three' ml={15} mt={11} color={colors.grey.nine}>
						{props.children}
					</Text>
				</div>
				<Container className='fathers-metric'>
					{props.classes.map((father, index) => {
						return (
							<Container
								key={father.path}
								className='container-father d-flex cursor'
								onClick={() => handleClass(father.path)}
							>
								<Text
									variant='three'
									className='fathers'
									color={colors.grey.nine}
									ml={20}
									mb='5px'
								>
									{index + 1}.{father.path}
								</Text>
							</Container>
						);
					})}
				</Container>
			</Container>
		</div>
	);
};
