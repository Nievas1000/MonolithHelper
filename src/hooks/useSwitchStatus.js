import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Switch } from '@mui/material';
import { styled } from '@mui/material/styles';
import { colors } from 'design-kit-codojo';

export const useSwitchStatus = () => {
	const [checked, setChecked] = useState(true);
	const dispatch = useDispatch();
	const handledCheckedState = (value) => {
		setChecked(!checked);
		switch (value) {
			case 'Interfaces':
				dispatch({
					type: 'SET_INTERFACES',
					payload: 'interface',
				});
				break;
			case 'Extends':
				dispatch({
					type: 'SET_EXTENDS',
					payload: 'extends',
				});
				break;
			case 'Tables':
				dispatch({
					type: 'SET_TABLES',
					payload: 'tables',
				});
				break;
		}
	};
	const CustomSwitch = styled(Switch)({
		'& .MuiSwitch-switchBase': {
			'&.Mui-checked + .MuiSwitch-track': {
				backgroundColor: colors.primary.two,
			},
		},
		'& .MuiSwitch-thumb': {
			backgroundColor: colors.primary.two,
		},
	});
	return [CustomSwitch, checked, handledCheckedState];
};