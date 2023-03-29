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
			<div>
				<DateApp />
				<Container ml={32} mt={24} className='container-home d-flex'>
					{apps.length > 0 && !activeInfo ? <DropdownClasses /> : null}
					<div className='container-switch'>
						<ButtonsSwitchZone />
					</div>
				</Container>
				{apps.length > 0 && !activeInfo ? (
					<Graph />
				) : (
					<div className='d-flex justify-content-center align-items-center spinner'>
						<img src='./spinner.gif' />
					</div>
				)}
			</div>
			<PopUpDeletedApp />
		</div>
	);
};

export default Home;
