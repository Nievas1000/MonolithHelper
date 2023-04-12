import { Container, Spinner } from 'design-kit-codojo';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import DateApp from '../components/myapp/DateApp';
import DropdownClasses from '../components/myapp/filters/DropdownClasses';
import Graph from '../components/myapp/graph/Graph';
import InfoApp from '../components/InfoApp';
import NavBar from '../components/navbar/NavBar';
import ButtonsSwitchZone from '../components/myapp/filters/ButtonsSwitchZone';
import { PopUpDeletedApp } from '../components/myapp/deleteApp/PopUpDeletedApp';

const Home = () => {
	const [activeDropdown, setActiveDropdown] = useState(false);
	const classe = useSelector((state) => state.selectedClass);
	const app = useSelector((state) => state.selectedApp);
	const activeInfo = useSelector((state) => state.info);

	if (!activeInfo) {
		history.pushState(null, '', 'my-app');
	}

	useEffect(() => {
		document.title = 'My Apps | Taffi';
	}, []);
	return (
		<div className='container-my-app'>
			<NavBar
				setActiveDropdown={setActiveDropdown}
				activeDropdown={activeDropdown}
			/>

			{activeInfo ? (
				<InfoApp />
			) : (
				<div>
					<DateApp />
					<Container ml={32} mt={24} className='container-home d-flex'>
						{classe !== 'Select class...' && app.classes.length > 0 ? (
							<DropdownClasses />
						) : null}
						<div className='container-switch'>
							<ButtonsSwitchZone />
						</div>
					</Container>
					{classe !== 'Select class...' && app.classes.length > 0 ? (
						<Graph />
					) : (
						<div className='d-flex justify-content-center align-items-center spinner'>
							<Spinner />
						</div>
					)}
				</div>
			)}
			<PopUpDeletedApp />
		</div>
	);
};

export default Home;
