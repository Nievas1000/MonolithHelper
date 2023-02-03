import {
	Text,
	colors,
	ContainerMoreApps,
	CrossIcon,
	TabMore,
} from 'design-kit-codojo';
import { useSelector } from 'react-redux';
import useDropdownMenu from '../hooks/useDropdownMenu';

const DropdownApps = ({ setActiveDropdown }) => {
	const state = useSelector((state) => state);
	const apps = state.dropdown;
	const allApps = state.allApps;
	const [selectApp, , remove] = useDropdownMenu();
	return (
		<ContainerMoreApps className='dropdownmy'>
			<div className='flex'>
				<Text variant='three' mr={64} color={colors.grey.six} mt={12}>
					More applications
				</Text>
				<CrossIcon onClick={() => setActiveDropdown(false)} />
			</div>
			<div className='container-apps'>
				{apps.length > 0 ? (
					apps.map((app) => {
						return (
							<TabMore
								variant='primary'
								key={app.applicationName}
								onClick={() => remove(app)}
							>
								<Text variant='two' mt={12}>
									{app.applicationName.length > 25
										? `${app.applicationName.substring(0, 25)}...`
										: app.applicationName}
								</Text>
							</TabMore>
						);
					})
				) : (
					<TabMore variant='primary'>
						<Text variant='two' mt={12}>
							There arent apps
						</Text>
					</TabMore>
				)}
			</div>
			<div className='container-apps-responsive'>
				{allApps.length > 0 ? (
					allApps.map((app) => {
						return (
							<TabMore
								variant='primary'
								key={app.applicationName}
								onClick={() => selectApp(app)}
							>
								<Text variant='two' mt={12}>
									{app.applicationName.length > 23
										? `${app.applicationName.substring(0, 23)}...`
										: app.applicationName}
								</Text>
							</TabMore>
						);
					})
				) : (
					<TabMore variant='primary'>
						<Text variant='two' mt={12}>
							There arent apps
						</Text>
					</TabMore>
				)}
			</div>
		</ContainerMoreApps>
	);
};

export default DropdownApps;