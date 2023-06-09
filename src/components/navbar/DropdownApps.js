import {
	Text,
	colors,
	ContainerMoreApps,
	CrossIcon,
	TabDropdown,
} from 'design-kit-codojo';
import { useSelector } from 'react-redux';
import useMoreTab from '../../hooks/useMoreTab';

const DropdownApps = ({ setActiveDropdown, divRefSon }) => {
	const state = useSelector((state) => state);
	const apps = state.dropdown;
	const allApps = state.allApps;
	const [selectApp, , remove] = useMoreTab();
	return (
		<ContainerMoreApps className='dropdownmy' ref={divRefSon}>
			<div className='flex'>
				<Text variant='three' mr={64} color={colors.grey.six} mt={12}>
					More applications
				</Text>
				<CrossIcon onClick={() => setActiveDropdown(false)} />
			</div>
			<div className='container-apps'>
				{apps.length > 0
					? apps.map((app) => {
							return (
								<TabDropdown
									variant='primary'
									key={app.applicationName}
									onClick={
										apps[0].classes.length === 0 ? null : () => remove(app)
									}
								>
									<Text
										variant='two'
										mt={12}
										title={app.applicationName}
										color={colors.grey.nine}
									>
										{app.applicationName.length > 25
											? `${app.applicationName.substring(0, 25)}...`
											: app.applicationName}
									</Text>
								</TabDropdown>
							);
					  })
					: null}
			</div>
			<div className='container-apps-responsive'>
				{allApps.length > 0
					? allApps.map((app) => {
							return (
								<TabDropdown
									variant='primary'
									key={app.applicationName}
									onClick={() => selectApp(app)}
								>
									<Text variant='two' mt={12}>
										{app.applicationName.length > 23
											? `${app.applicationName.substring(0, 23)}...`
											: app.applicationName}
									</Text>
								</TabDropdown>
							);
					  })
					: null}
			</div>
		</ContainerMoreApps>
	);
};

export default DropdownApps;
