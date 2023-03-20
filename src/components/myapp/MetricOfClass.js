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
				Utilizes
			</Text>
			<Text variant='three' color={colors.grey.ten} ml={16} mt='4px'>
				<SmallInterfaceIcon /> {metric.interfaces.length}
				{metric.interfaces.lenth > 1 ? ' interfaces' : ' interface'}
			</Text>
			<Text variant='three' color={colors.grey.ten} ml={15} mt={-11}>
				<SmallEncapsulatedIcon /> {metric.encapsulatedClasses}
				{metric.encapsulatedClasses > 1
					? ' encapsulated classes'
					: ' encapsulated classe'}
			</Text>
			<Text variant='three' color={colors.grey.ten} ml={15} mt={-11}>
				<SmallNonEncapsulatedIcon /> {metric.nonEncapsulatedClasses}
				{metric.nonEncapsulatedClasses.length
					? ' non-encapsulated classes'
					: ' non-encapsulated classe'}
			</Text>
			<Text variant='three' color={colors.grey.ten} ml={17} mt={-11}>
				<SmallEncapsulatedTableIcon /> {metric.encapsulatedTables}
				{metric.encapsulatedTables.length > 1
					? ' encapsulated tables'
					: ' encapsulated table'}
			</Text>
			<Text variant='three' color={colors.grey.ten} ml={17} mt={-11}>
				<SmallNonEncapsulatedTableIcon /> {metric.nonEncapsulatedTables}
				{metric.nonEncapsulatedTables.length > 1
					? ' non-encapsulated tables'
					: ' non-encapsulated table'}
			</Text>
		</Container>
	);
};
