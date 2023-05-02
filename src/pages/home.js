import { Container } from 'design-kit-codojo';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import InfoApp from '../components/InfoApp';
import NavBar from '../components/navbar/NavBar';

import { PopUpDeletedApp } from '../components/myapp/deleteApp/PopUpDeletedApp';
import useLoginGoogle from '../hooks/useLoginGoogle';
import useLoginGithub from '../hooks/useLoginGithub';
import { posthog } from 'posthog-js';
/* import { DropdownList } from '../components/myapp/graph/DropdownList'; */
import { MyApp } from '../components/myapp/MyApp';
import { NoApisModal } from '../components/apis/NoApisModal';
import { ApiTable } from '../components/apis/ApiTable';

const Home = ({ apis = false }) => {
	const [activeDropdown, setActiveDropdown] = useState(false);
	const userApplicationKey = localStorage.getItem('userAppKey');
	const app = useSelector((state) => state.selectedApp);
	const activeInfo = useSelector((state) => state.info);
	const user = useSelector((state) => state.user);
	const classe = useSelector((state) => state.selectedClass);
	const [api, setApi] = useState(false);
	console.log(app);
	useLoginGoogle();
	useLoginGithub();
	if (!activeInfo) {
		history.pushState(null, '', 'my-app');
	}

	useEffect(() => {
		document.title = 'My Apps | Taffi';
		if (user !== null) {
			posthog.identify(userApplicationKey, {
				firstName: user.firstName,
				email: user.email,
				lastName: user.lastName,
			});
		}
		setApi(apis);
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
				<Container>
					{/* {classe !== 'Select class...' ? (
						<DropdownList setApi={setApi} api={api} />
					) : null} */}

					{classe !== 'Select class...' && api ? (
						app.endpoints[0].length > 0 ? (
							<ApiTable setApi={setApi} />
						) : (
							<NoApisModal setApi={setApi} />
						)
					) : (
						<MyApp />
					)}

					<PopUpDeletedApp />
				</Container>
			)}
		</div>
	);
};

export default Home;
