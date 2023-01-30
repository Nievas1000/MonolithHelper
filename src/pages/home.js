import { useState } from 'react';
import DropdownApps from '../components/DropdownApps';
import NavBar from '../components/NavBar';

const Home = () => {
	const [activeDropdown, setActiveDropdown] = useState(false);
	return (
		<div className='container-my-app'>
			<NavBar
				setActiveDropdown={setActiveDropdown}
				activeDropdown={activeDropdown}
			/>
			{activeDropdown ? <DropdownApps /> : null}
		</div>
	);
};

export default Home;
