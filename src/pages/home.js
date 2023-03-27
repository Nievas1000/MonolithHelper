import { Container } from 'design-kit-codojo';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import DateApp from '../components/myapp/DateApp';
import DropdownClasses from '../components/myapp/DropdownClasses';
import Graph from '../components/myapp/Graph';
import useApp from '../hooks/useApp';
import InfoApp from '../components/InfoApp';
import NavBar from '../components/navbar/NavBar';
import ButtonsSwitchZone from '../components/myapp/ButtonsSwitchZone';
import { PopUpDeletedApp } from '../components/myapp/PopUpDeletedApp';

const Home = () => {
	const [activeDropdown, setActiveDropdown] = useState(false);
	const apps = useSelector((state) => state.allApps);
	const info = useSelector((state)=> state.info)
	useApp();
	useEffect(() => {
		document.title = 'My Apps | Codojo';
	}, []);
	return (
		<div className='container-my-app'>
			<NavBar
				setActiveDropdown={setActiveDropdown}
				activeDropdown={activeDropdown}
			/>
			{info && <InfoApp/>}
			{apps.length > 0 && !info ? (
				<div>
					<DateApp />
					<Container ml={32} mt={24} className='container-home d-flex'>
						<DropdownClasses />
						<div className='container-switch'>
							<ButtonsSwitchZone />
						</div>
					</Container>
					<Graph />
				</div>
			) : null}
			<PopUpDeletedApp />
		</div>
	);
};

export default Home;
