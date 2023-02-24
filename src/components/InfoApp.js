import {
	colors,
	ContainerInfoAddApplication,
	Subtitle,
	Text,
	DownloadIcon,
} from 'design-kit-codojo';

const InfoApp = () => {
	const userApplicationKey = localStorage.getItem('userAppKey');
	return (
		<div className='containerApp'>
			<ContainerInfoAddApplication>
				<Subtitle
					className='center'
					variant='two'
					color={colors.grey.six}
					mt={35}
					mb={0}
				>
					How to Add an Application
				</Subtitle>
				<Text variant='two' color={colors.grey.six} ml={5} mt={35} mb={-2}>
					{' '}
					1. Download the two files
				</Text>
				<div className='download'>
					<DownloadIcon />
					<Text variant='three' color={colors.primary.two} mt={3} ml={2}>
						SendAppDataToCodojo.zip
					</Text>
				</div>
				<br />
				<div className='containerUserKey'>
					<Text variant='two' color={colors.grey.four} ml={-4} mt={-4}>
						Your USER_APPLICATION_KEY = {userApplicationKey}
					</Text>
				</div>
				<br />
				<div className='containertext'>
					<Text variant='two' color={colors.grey.six} ml={4} mt={-3}>
						2. Unzip the contents to the top directory of the application
						project
						<br />
						Example: /apps/foo/bar/myJavaProject/{'{ zip file contents }'}
						<br />
						3. Open the SendToCodojo.properties file, complete the instructions
						in the file, and save any edits. It is important to maintain the
						same filename. <br />
						4. Execute the jar file on the command line by typing the following:
					</Text>

					<Text variant='two' color={colors.grey.four} ml={4} mt={0}>
						{' '}
						The jar file will execute successfully with JAVA version 8 to
						17.JAVA_HOME environment variable will need to be set for the file
						to execute successfully. The jar file automatically sends
						application information to Codojo. Login to see the results.{' '}
					</Text>
				</div>

				<Text className='center' variant='two' color={colors.grey.six} mt={0}>
					That was easy!
				</Text>
				<Text className='center' variant='two' color={colors.grey.six} mt={0}>
					But if it wasn’t, send us feedback and we’ll help within a few
					business hours.
				</Text>
			</ContainerInfoAddApplication>
		</div>
	);
};
export default InfoApp;
