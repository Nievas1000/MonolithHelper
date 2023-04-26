import {
	Container,
	SmallEncapsulatedTableIcon,
	SmallNonEncapsulatedTableIcon,
	Text,
	colors,
} from 'design-kit-codojo';

export const MetricOfTables = (data) => {
	const handleClass = (classe) => {
		data.dispatch({
			type: 'SELECT_CLASS',
			payload: classe,
		});
	};
	return (
		<Container className='container-metrics' bg={colors.background.four}>
			<Text
				variant='one'
				color={colors.grey.ten}
				fontWeight={500}
				ml={15}
				mt={15}
				className='d-flex metric-table-title'
			>
				{data.classes.length > 1 ? (
					<span className='d-flex align-items-center'>
						<SmallNonEncapsulatedTableIcon />
					</span>
				) : (
					<span className='d-flex align-items-center'>
						<SmallEncapsulatedTableIcon />
					</span>
				)}
				{data.table} called by {data.classes.length} classes
			</Text>
			<div className='d-flex justify-content-center mb-4'>
				<Container
					className='container-tables-metric'
					bg={colors.background.eight}
				>
					<Container
						className='fathers-metric fathers-tables-metric'
						mt={11}
						mb={9}
					>
						{data.classes.map((classe, index) => {
							return (
								<Container
									key={classe}
									className='container-father d-flex cursor'
								>
									<Text
										variant='three'
										className='fathers metrics-items'
										color={colors.grey.nine}
										ml={20}
										mb='5px'
										onClick={() => handleClass(classe)}
									>
										{index + 1}. {classe}
									</Text>
								</Container>
							);
						})}
					</Container>
				</Container>
			</div>
		</Container>
	);
};
