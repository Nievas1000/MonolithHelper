import { Tab, Text, LeafIcon, CrossIcon } from 'design-kit-codojo';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import useDropdownMenu from '../hooks/useDropdownMenu';
const NavBarTabs = () => {
	const apps = useSelector((state) => state.initialApps);
	const [active, setActive] = useState();
	const [addAppToDropdown] = useDropdownMenu();
	const handleActive = (name) => {
		setActive(name);
	};
	return (
		<div className='d-flex'>
			{apps
				? apps.map((app) => {
						return (
							<Tab
								variant={active === app.applicationName ? 'active' : 'primary'}
								key={app.applicationName}
								onClick={() => handleActive(app.applicationName)}
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
