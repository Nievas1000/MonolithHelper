import { MuiThemeProvider, Switch } from '@material-ui/core';
import { colors, Text } from 'design-kit-codojo';
import { useSwitchStatus } from '../hooks/useSwitchStatus';

export const SwitchButton = ({ value }) => {
	const [theme, checked, handledCheckedState] = useSwitchStatus();
	return (
		<div className='d-flex'>
			<Text variant='three' color={colors.grey.six} mt={2}>
				{value}
			</Text>
			<MuiThemeProvider theme={theme}>
				<Switch
					checked={checked}
					onChange={() => handledCheckedState(value)}
					name='checked'
					color='primary'
				/>
			</MuiThemeProvider>
		</div>
	);
};
