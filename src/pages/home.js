import { Container } from 'design-kit-codojo';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import DateApp from '../components/DateApp';
import DropdownClasses from '../components/DropdownClasses';
import ContainerNavbar from '../components/ContainerNavBar';
import Graph from '../components/Graph';
import useApp from '../hooks/useApp';

const Home = () => {
	const apps = useSelector((state) => state.allApps);
	useApp();
	useEffect(() => {
		document.title = 'My Apps | Codojo';
	}, []);
	return (
		<div className='container-my-app'>
			<ContainerNavbar />
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
