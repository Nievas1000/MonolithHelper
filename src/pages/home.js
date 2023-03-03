import { Container } from 'design-kit-codojo';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import DateApp from '../components/DateApp';
import DropdownClasses from '../components/DropdownClasses';
import Graph from '../components/Graph';
import useApp from '../hooks/useApp';
import InfoApp from '../components/InfoApp';
import NavBar from '../components/NavBar';

const Home = () => {
	const [activeDropdown, setActiveDropdown] = useState(false);
	const [activeInfo, setActiveInfo] = useState(false);
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
				activeInfo={activeInfo}
				setActiveInfo={setActiveInfo}
			/>
			{activeInfo && <InfoApp />}
			{apps.length > 0 && !activeInfo ? (
				<div>
					<DateApp />
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
