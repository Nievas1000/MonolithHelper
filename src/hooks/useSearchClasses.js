import { posthog } from 'posthog-js';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Hook para manejar los estados de el dropdown de las classes de una aplicacion (seleccionar clase, busqueda)
const useSearchClasses = () => {
	const dispatch = useDispatch();
	const selectedApp = useSelector((state) => state.selectedApp);
	const [classes, setClasses] = useState([]);
	const handleChange = (e) => {
		const text = e.target.value;

		if (
			text.toUpperCase().includes('API') ||
			text.toUpperCase().includes('ENDPOINT')
		) {
			setClasses(selectedApp.endpoints[0].sort());
		} else {
			posthog.capture('Input Classes', { value: text });
			const data = selectedApp.classes[0].filter((item) => {
				const itemData = item.toUpperCase();
				const textData = text.toUpperCase();

				return itemData.indexOf(textData) > -1;
			});
			if (data.length === 0) {
				setClasses(['No results found']);
			} else {
				setClasses(data);
			}
		}
	};

	const selectClass = (e, setShowClasses) => {
		if (e !== 'No results found') {
			dispatch({
				type: 'SELECT_CLASS',
				payload: e,
			});
			setShowClasses(false);
			setClasses([]);
		} else {
			setClasses([]);
		}
	};
	return [selectedApp, classes, handleChange, selectClass, setClasses];
};

export default useSearchClasses;
