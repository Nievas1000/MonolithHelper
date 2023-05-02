import ButtonsSwitchZone from './filters/ButtonsSwitchZone';
import DateApp from './DateApp';
import DropdownClasses from './filters/DropdownClasses';
import Graph from './graph/Graph';
import { Container, Spinner, Text, colors } from 'design-kit-codojo';
import { useSelector } from 'react-redux';

export const MyApp = () => {
	const classe = useSelector((state) => state.selectedClass);
	const app = useSelector((state) => state.selectedApp);
	return (
		<div>
			<DateApp />
			<Container ml={32} mt={24} className='container-home d-flex'>
				{classe !== 'Select class...' && app.classes.length > 0 ? (
					<DropdownClasses />
				) : null}
				<div className='container-switch'>
					<ButtonsSwitchZone />
				</div>
			</Container>
			{classe !== 'Select class...' && app.classes.length > 0 ? (
				<div>
					<Graph />
					{app.applicationName === 'Java Demo App' ? (
						<Container
							bg={colors.background.one}
							className='container-step-desktop'
						>
							<Container bg={colors.background.four} className='step-desktop'>
								<Text variant='two' color={colors.grey.nine}>
									Want to plan a microservice from your app? Login with a
									computer and follow some simple steps to upload an app;
									unfortunately, this feature is not available on mobile.
								</Text>
							</Container>
						</Container>
					) : null}
				</div>
			) : (
				<div className='d-flex justify-content-center align-items-center spinner'>
					<Spinner />
				</div>
			)}
		</div>
	);
};
