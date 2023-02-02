import { Tab, Text, LeafIcon, CrossIcon } from 'design-kit-codojo';
/* import { useState } from 'react'; */
import { useDispatch, useSelector } from 'react-redux';
import useDropdownMenu from '../hooks/useDropdownMenu';
const NavBarTabs = () => {
	const state = useSelector((state) => state);
	const dispatch = useDispatch();
	const apps = state.initialApps;
	const selectedApp = state.selectedApp;
	/* const [active, setActive] = useState(); */
	const [addAppToDropdown] = useDropdownMenu();
	const handleActive = (app) => {
		dispatch({
			type: 'SELECT_APP',
			payload: app,
		});
	};
	return (
		<div className='tabs d-flex'>
			{apps
				? apps.map((app) => {
						return (
							<Tab
								variant={
									selectedApp.applicationName === app.applicationName
										? 'active'
										: 'primary'
								}
								key={app.applicationName}
								onClick={() => handleActive(app)}
							>
								<LeafIcon />
								<Text variant='three' mt={13}>
									{app.applicationName.length > 35
										? `${app.applicationName.substring(0, 35)}...`
										: app.applicationName}
								</Text>
								<div onClick={() => addAppToDropdown(app)} className='mb-1'>
									<CrossIcon />
								</div>
							</Tab>
						);
				  })
				: null}
		</div>
	);
};

export default NavBarTabs;
