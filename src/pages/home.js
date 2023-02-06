import { Container } from 'design-kit-codojo';
import { useState } from 'react';
import DateApp from '../components/DateApp';
import DropdownClasses from '../components/DropdownClasses';
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
			<DateApp />
			<Container ml={32} mt={24} className='container-home'>
				<DropdownClasses />
			</Container>
		</div>
	);
};

export default Home;
