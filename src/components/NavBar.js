import {
	Tab,
	Text,
	NavBarContainer,
	colors,
	OpenAppTab,
	ContainerTabs,
	CodojoLogoColor,
	AddApplication,
	AddIcon,
	MiniArrowIcon,
} from 'design-kit-codojo';
import useApp from '../hooks/useApp';
import DropdownApps from './DropdownApps';
import NavBarTabs from './NavBarTabs';
import PersonalZone from './PersonalZone';

const NavBar = ({ setActiveDropdown, activeDropdown }) => {
	useApp();
	return (
		<NavBarContainer>
			<ContainerTabs>
				<OpenAppTab className='open-app'>
					<CodojoLogoColor />
					<Text variant='three' color={colors.grey.five} mt={13}>
						Open applications
					</Text>
				</OpenAppTab>
				<NavBarTabs />
				<Tab variant='more' onClick={() => setActiveDropdown(!activeDropdown)}>
					<Text variant='three' color={colors.grey.five} mt={12}>
						more...
					</Text>
					<MiniArrowIcon />
					{activeDropdown ? (
						<DropdownApps setActiveDropdown={setActiveDropdown} />
					) : null}
				</Tab>
				<AddApplication className='add-app'>
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
