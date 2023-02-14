import { useState } from 'react';
import NavBar from './NavBar';

const ContainerNavbar = () => {
	const [activeDropdown, setActiveDropdown] = useState(false);
	const [activeLogout, setActiveLogout] = useState(false);
	return (
		<div>
			<NavBar
				setActiveDropdown={setActiveDropdown}
				activeDropdown={activeDropdown}
				setActiveLogout={setActiveLogout}
				activeLogout={activeLogout}
			/>
		</div>
	);
};

export default ContainerNavbar;
