import {
	colors,
	Container,
	Text,
	SmallSelectedClassIcon,
	SmallEncapsulatedIcon,
	SmallNonEncapsulatedIcon,
	SmallNonEncapsulatedTableIcon,
	SmallEncapsulatedTableIcon,
} from 'design-kit-codojo';

export const MetricOfClass = ({ metric, classe }) => {
	return (
		<Container className='container-metrics'>
			<Text variant='one' color={colors.grey.ten} ml={15} mt={15}>
				<SmallSelectedClassIcon />
				{classe.length > 35 ? `${classe.substring(0, 35)}...` : classe}
			</Text>
			<Text variant='two' color={colors.grey.six} ml={15} mt={26}>
				Calls {metric.nonEncapsulatedClasses + metric.encapsulatedClasses}{' '}
				classes
			</Text>
			<Text variant='three' color={colors.grey.ten} ml={15} mt={9}>
				<SmallEncapsulatedIcon /> {metric.encapsulatedClasses} encapsulated
				classes
			</Text>
			<Text variant='three' color={colors.grey.ten} ml={15} mt={-11}>
				<SmallNonEncapsulatedIcon /> {metric.nonEncapsulatedClasses}{' '}
				non-encapsulated classes
			</Text>
			<Text variant='two' color={colors.grey.six} ml={15} mt={26}>
				Calls {metric.nonEncapsulatedTables + metric.encapsulatedTables} tables
			</Text>
			<Text variant='three' color={colors.grey.ten} ml={15} mt={9}>
				<SmallEncapsulatedTableIcon /> {metric.encapsulatedTables} encapsulated
				classes
			</Text>
			<Text variant='three' color={colors.grey.ten} ml={15} mt={-11}>
				<SmallNonEncapsulatedTableIcon /> {metric.nonEncapsulatedTables}{' '}
				non-encapsulated classes
			</Text>
		</Container>
	);
};
