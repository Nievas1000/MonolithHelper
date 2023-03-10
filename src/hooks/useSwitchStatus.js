import { createTheme } from '@material-ui/core';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

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
	const theme = createTheme({
		palette: {
			primary: {
				main: '#47BC82', // Cambia el color de la pista
			},
		},
	});
	return [theme, checked, handledCheckedState];
};
