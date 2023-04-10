import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Hook para manejar los estados de el dropdown de las classes de una aplicacion (seleccionar clase, busqueda)
const useSearchClasses = () => {
	const dispatch = useDispatch();
	const selectedApp = useSelector((state) => state.selectedApp);
	const [classes, setClasses] = useState([]);
	const handleChange = (e) => {
		const text = e.target.value;
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
	};

	const selectClass = (e, setShowClasses) => {
		if (e !== 'No results found') {
			dispatch({
				type: 'SELECT_CLASS',
				payload: e,
			});
			setShowClasses(false);
			setClasses(selectedApp.classes[0]);
		}
	};

	return [selectedApp, classes, handleChange, selectClass, setClasses];
};

export default useSearchClasses;
