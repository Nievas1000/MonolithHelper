import {
	Tab,
	Text,
	LeafIcon,
	CrossIcon,
	LeafIconActive,
} from 'design-kit-codojo';
import { useSelector } from 'react-redux';
import useDropdownMenu from '../../hooks/useDropdownMenu';
const NavBarTabs = () => {
	const state = useSelector((state) => state);
	const apps = state.initialApps;

	const selectedApp = state.selectedApp;
	const info = state.info;
	const [selectApp, addAppToDropdown] = useDropdownMenu();
	return (
		<div className='tabs d-flex'>
			{apps
				? apps.map((app) => {
						return (
							<div key={app.applicationName} className='apps-full'>
								<Tab
									variant={
										selectedApp.applicationName === app.applicationName && !info
											? 'active'
											: 'primary'
									}
									onClick={
										apps[0].classes.length === 0 ? null : () => selectApp(app)
									}
								>
									{selectedApp.applicationName === app.applicationName ? (
										<LeafIconActive />
									) : (
										<LeafIcon />
									)}

									<Text variant='three' mt={13} title={app.applicationName}>
										{app.applicationName.length > 35
											? `${app.applicationName.substring(0, 35)}...`
											: app.applicationName}
									</Text>
									{state.allApps.length > 3 ? (
										<div onClick={() => addAppToDropdown(app)} className='mb-1'>
											<CrossIcon />
										</div>
									) : null}
								</Tab>
							</div>
						);
				  })
				: null}
		</div>
	);
};

export default NavBarTabs;
