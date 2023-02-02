import {
	Text,
	colors,
	ContainerMoreApps,
	CrossIcon,
	TabMore,
} from 'design-kit-codojo';
import { useDispatch, useSelector } from 'react-redux';

const DropdownApps = ({ setActiveDropdown }) => {
	const state = useSelector((state) => state);
	const apps = state.dropdown;
	const dispatch = useDispatch();
	const remove = (app) => {
		dispatch({
			type: 'REMOVE_DROPDOWN',
			payload: app,
		});
	};
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
									{app.applicationName}
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
