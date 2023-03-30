import { useRef, useState, useEffect } from 'react';

const useDropdown = () => {
	const [showDropdow, setShowDropdown] = useState(false);
	const divRefSon = useRef(null);
	const divRefFather = useRef(null);
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
		}

		// Escuchar clics en el documento
		document.addEventListener('mousedown', handleClickOutside);

		// Limpiar efecto cuando el componente se desmonte
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return [showDropdow, setShowDropdown, divRefSon, divRefFather];
};

export default useDropdown;
