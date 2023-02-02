import { useState } from 'react';
import DropdownApps from '../components/DropdownApps';
import NavBar from '../components/NavBar';
import useApp from '../hooks/useApp';

const Home = () => {
	const [activeDropdown, setActiveDropdown] = useState(false);
	const [activeLogout, setActiveLogout] = useState(false);
	useApp();
	return (
		<div className='container-my-app'>
			<NavBar
				setActiveDropdown={setActiveDropdown}
				activeDropdown={activeDropdown}
				setActiveLogout={setActiveLogout}
				activeLogout={activeLogout}
			/>
			{activeDropdown ? <DropdownApps /> : null}
		</div>
	);
};

export default Home;
