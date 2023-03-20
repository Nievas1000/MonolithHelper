import { colors, Text } from 'design-kit-codojo';
import { useSelector } from 'react-redux';

const DateApp = () => {
	const selectedApp = useSelector((state) => state.selectedApp);
	return (
		<div className='date-app'>
			{selectedApp ? (
				<Text variant='three' color={colors.grey.three} mt={15} mr={35}>
					Code received
					{' ' + new Date(selectedApp.date).getDate() + ' '}
					{' ' +
						new Date(selectedApp.date).toLocaleString('en-US', {
							month: 'short',
						}) +
						' '}
					{new Date(selectedApp.date).getFullYear()}
				</Text>
			) : null}
		</div>
	);
};

export default DateApp;
