import { Container, Spinner } from 'design-kit-codojo';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import InfoApp from '../components/InfoApp';
import NavBar from '../components/navbar/NavBar';

import { PopUpDeletedApp } from '../components/myapp/deleteApp/PopUpDeletedApp';
import useLoginGoogle from '../hooks/useLoginGoogle';
import useLoginGithub from '../hooks/useLoginGithub';
import { posthog } from 'posthog-js';
import { DropdownList } from '../components/myapp/graph/DropdownList';
import { DatastoresTable } from '../components/DatastoresTable';
import { MyApp } from '../components/myapp/MyApp';
import { NoApisModal } from '../components/apis/NoApisModal';
import { ApiTable } from '../components/apis/ApiTable';

const Home = ({ dataUrl = 'my-app' }) => {
	const [activeDropdown, setActiveDropdown] = useState(false);
	const userApplicationKey = localStorage.getItem('userAppKey');
	const app = useSelector((state) => state.selectedApp);
	const activeInfo = useSelector((state) => state.info);
	const user = useSelector((state) => state.user);
	const [url, setUrl] = useState('');
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
		setUrl(dataUrl);
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
					{app !== null && app.classes.length > 0 ? (
						<div>
							<DropdownList setUrl={setUrl} url={url} />

							{url === 'api' &&
								(app.endpoints[0].length > 0 ? (
									<ApiTable setUrl={setUrl} />
								) : (
									<NoApisModal setUrl={setUrl} />
								))}
							{url === 'datastores' && <DatastoresTable setUrl={setUrl} />}
							{url === 'my-app' && <MyApp />}
							<PopUpDeletedApp />
						</div>
					) : (
						<div className='d-flex justify-content-center align-items-center spinner'>
							<Spinner />
						</div>
					)}
				</Container>
			)}
		</div>
	);
};

export default Home;
