import { useRef, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const useDropdown = (data = null) => {
	const [showDropdow, setShowDropdown] = useState(false);
	const divRefSon = useRef(null);
	const divRefFather = useRef(null);
	const selectedApp = useSelector((state) => state.selectedApp);
	useEffect(() => {
		function handleClickOutside(event) {
			if (
				divRefSon.current &&
				!divRefSon.current.contains(event.target) &&
				!divRefFather.current.contains(event.target)
			) {
				// Si se hizo clic fuera del div, ocultarlo
				setShowDropdown(false);
			}
			if (data !== null) {
				data(selectedApp.classes[0]);
			}
		}

		// Escuchar clicks en el documento
		document.addEventListener('mousedown', handleClickOutside);

		// Limpiar efecto cuando el componente se desmonte
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return [showDropdow, setShowDropdown, divRefSon, divRefFather];
};

export default useDropdown;
