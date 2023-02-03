import { Tab, Text, LeafIcon, CrossIcon } from 'design-kit-codojo';
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
							</div>
						);
				  })
				: null}
			<div className='tab-responsive'>
				{/* <Tab variant='active'>
					<LeafIcon />
					<Text variant='three' mt={13}>
						{apps[0].applicationName.length > 35
							? `${apps[0].applicationName.substring(0, 35)}...`
							: apps[0].applicationName}
					</Text>
					<div className='mb-1'>
						<CrossIcon />
					</div>
				</Tab> */}
			</div>
		</div>
	);
};

export default NavBarTabs;
