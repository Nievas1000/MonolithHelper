import { Container } from 'design-kit-codojo';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import DateApp from '../components/DateApp';
import DropdownClasses from '../components/DropdownClasses';
import Graph from '../components/Graph';
import useApp from '../hooks/useApp';
import InfoApp from './InfoApp';
import NavBar from '../components/NavBar';

const Home = () => {
	const [activeDropdown, setActiveDropdown] = useState(false);
	const [activeInfo, setActiveInfo] = useState(false);
	const [activeLogout, setActiveLogout] = useState(false);
	const apps = useSelector((state) => state.allApps);
	useApp();
	useEffect(() => {
		document.title = 'My Apps | Codojo';
	}, []);
	return (
		<div className='container-my-app'>
			<NavBar
				setActiveDropdown={setActiveDropdown}
				activeDropdown={activeDropdown}
				setActiveLogout={setActiveLogout}
				activeLogout={activeLogout}
				activeInfo={activeInfo}
				setActiveInfo={setActiveInfo}
			/>
			{activeInfo && <InfoApp />}
			<DateApp />
			{apps.length > 0 ? (
				<div>
					<Container ml={32} mt={24} className='container-home'>
						<DropdownClasses />
					</Container>
					<Graph />
				</div>
			) : null}
		</div>
	);
};

export default Home;
