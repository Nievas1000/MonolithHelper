import {
	colors,
	Container,
	Text,
	SmallSelectedClassIcon,
	SmallEncapsulatedIcon,
	SmallNonEncapsulatedIcon,
	SmallNonEncapsulatedTableIcon,
	SmallEncapsulatedTableIcon,
	SmallInterfaceIcon,
} from 'design-kit-codojo';

export const MetricOfClass = ({ metric, classe }) => {
	return (
		<Container className='container-metrics' bg={colors.background.four}>
			<Text
				variant='one'
				color={colors.grey.ten}
				ml={15}
				mt={15}
				title={classe}
			>
				<SmallSelectedClassIcon />
				{classe.length > 35 ? `${classe.substring(0, 35)}...` : classe}
			</Text>
			<Text variant='two' color={colors.grey.six} ml={15} mt={26}>
				Utilizes{' '}
				{metric.nonEncapsulatedClasses +
					metric.encapsulatedTables +
					metric.nonEncapsulatedTables +
					metric.encapsulatedClasses}{' '}
				resources ({metric.showNodes - 1} shown)
			</Text>
			<Text variant='three' color={colors.grey.ten} ml={16} mt='4px'>
				<SmallInterfaceIcon /> {metric.interfaces.length}
				{metric.interfaces.length === 1  ? ' interface' : ' interfaces'}

			</Text>
			<Text variant='three' color={colors.grey.ten} ml={15} mt={-11}>
				<SmallEncapsulatedIcon /> {metric.encapsulatedClasses}
				{metric.encapsulatedClasses === 1  ? ' exclusive class' : ' exclusive classes'}
			</Text>
			<Text variant='three' color={colors.grey.ten} ml={15} mt={-11}>
				<SmallNonEncapsulatedIcon /> {metric.nonEncapsulatedClasses}
					{metric.nonEncapsulatedClasses === 1 ? ' non-exclusive class ' : ' non-exclusive classes'}
			</Text>
			<Text variant='three' color={colors.grey.ten} ml={17} mt={-11}>
				<SmallEncapsulatedTableIcon /> {metric.encapsulatedTables}
				
				{metric.encapsulatedTables === 1 ? ' exclusive datastore ': ' exclusive datastores '}
			</Text>
			<Text variant='three' color={colors.grey.ten} ml={17} mt={-11}>
				<SmallNonEncapsulatedTableIcon /> {metric.nonEncapsulatedTables}			
				{metric.nonEncapsulatedTables === 1 ? ' non-exclusive datastore ' : ' non-exclusive datastores '}
			</Text>
		</Container>
	);
};
