import { useState } from 'react';
import { useSelector } from 'react-redux';

// Hook para manejar los estados de el dropdown de las classes de una aplicacion (seleccionar clase, busqueda)
const useSearchClasses = () => {
	const selectedApp = useSelector((state) => state.selectedApp);
	const [classes, setClasses] = useState([]);
	const [classe, setClasse] = useState('Select class...');
	const handleChange = (e) => {
		const text = e.target.value;
		const data = selectedApp.classes[0].filter((item) => {
			const itemData = item.toUpperCase();
			const textData = text.toUpperCase();
			return itemData.indexOf(textData) > -1;
		});
		setClasses(data);
	};

	const selectClass = (e) => {
		setClasse(e);
		console.log(classe);
	};

	return [selectedApp, classes, handleChange, classe, selectClass];
};

export default useSearchClasses;
