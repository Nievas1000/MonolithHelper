import {
	Text,
	colors,
	ContainerMoreApps,
	CrossIcon,
	TabMore,
} from 'design-kit-codojo';

const DropdownApps = () => {
	return (
		<ContainerMoreApps className='dropdownmy'>
			<div className='flex'>
				<Text variant='three' mr={64} color={colors.grey.six} mt={12}>
					More applications
				</Text>
				<CrossIcon />
			</div>
			<TabMore variant='active'>
				<Text variant='two' mt={12}>
					test_9
				</Text>
			</TabMore>
			<TabMore variant='primary'>
				<Text variant='two' mt={12}>
					test_10
				</Text>
			</TabMore>
			<TabMore variant='primary'>
				<Text variant='two' mt={12}>
					test_11
				</Text>
			</TabMore>
			<TabMore variant='primary'>
				<Text variant='two' mt={12}>
					test_12
				</Text>
			</TabMore>
			<TabMore variant='primary'>
				<Text variant='two' mt={12}>
					test_12
				</Text>
			</TabMore>
		</ContainerMoreApps>
	);
};

export default DropdownApps;
