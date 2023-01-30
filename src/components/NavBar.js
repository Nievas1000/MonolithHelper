import {
	Tab,
	Text,
	NavBarContainer,
	colors,
	OpenAppTab,
	ContainerTabs,
	CodojoLogoColor,
	LeafIcon,
	AddApplication,
	AddIcon,
	MiniArrowIcon,
} from 'design-kit-codojo';
import PersonalZone from './PersonalZone';

const arrayTest = ['test_1', 'test_2', 'test_3', 'test_4', 'test_5'];

const NavBar = ({ setActiveDropdown, activeDropdown }) => {
	return (
		<NavBarContainer>
			<ContainerTabs>
				<OpenAppTab>
					<CodojoLogoColor />
					<Text variant='three' color={colors.grey.five} mt={13}>
						Open applications
					</Text>
				</OpenAppTab>
				{arrayTest.map((app) => {
					return (
						<Tab variant='primary' key={app}>
							<LeafIcon />
							<Text variant='three' mt={13}>
								{app}
							</Text>
						</Tab>
					);
				})}
				<Tab variant='more' onClick={() => setActiveDropdown(!activeDropdown)}>
					<Text variant='three' color={colors.grey.five} mt={12}>
						more...
					</Text>
					<MiniArrowIcon />
				</Tab>
				<AddApplication className='user'>
					<AddIcon />
					<Text variant='three' color={colors.primary.two}>
						Add application
					</Text>
				</AddApplication>
			</ContainerTabs>
			<PersonalZone />
		</NavBarContainer>
	);
};

export default NavBar;
