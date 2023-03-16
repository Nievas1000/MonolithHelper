import {
	Tab,
	Text,
	LeafIcon,
	CrossIcon,
	LeafIconActive,
} from 'design-kit-codojo';
import { useSelector } from 'react-redux';
import useDropdownMenu from '../hooks/useDropdownMenu';
const NavBarTabs = () => {
	const state = useSelector((state) => state);
	const apps = state.initialApps;
	const selectedApp = state.selectedApp;
	const [selectApp, addAppToDropdown] = useDropdownMenu();
	return (
		<div className='tabs d-flex'>
			{apps
				? apps.map((app) => {
						return (
							<div key={app.applicationName} className='apps-full'>
								<Tab
									variant={
										selectedApp.applicationName === app.applicationName
											? 'active'
											: 'primary'
									}
									onClick={() => selectApp(app)}
								>
									{selectedApp.applicationName === app.applicationName ? (
										<LeafIconActive />
									) : (
										<LeafIcon />
									)}

									<Text
										variant='one'
										mt={13}
										title={app.applicationName}
										mr='4px'
									>
										{app.applicationName.length > 35
											? `${app.applicationName.substring(0, 35)}...`
											: app.applicationName}
									</Text>
									<div onClick={() => addAppToDropdown(app)} className='mb-1'>
										<CrossIcon />
									</div>
								</Tab>
							</div>
						);
				  })
				: null}
		</div>
	);
};

export default NavBarTabs;
