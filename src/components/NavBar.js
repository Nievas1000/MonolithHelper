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
	MiniArrowIconExpand,
} from 'design-kit-codojo';
import { useSelector } from 'react-redux';
import useApp from '../hooks/useApp';
import DropdownApps from './DropdownApps';
import NavBarTabs from './NavBarTabs';
import PersonalZone from './PersonalZone';

const NavBar = ({ setActiveDropdown, activeDropdown }) => {
	const apps = useSelector((state) => state.allApps);
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
				{apps.length > 3 ? (
					<Tab
						variant='more'
						onClick={() => setActiveDropdown(!activeDropdown)}
					>
						<Text variant='three' color={colors.grey.five} mt={12}>
							more...
						</Text>
						<MiniArrowIconExpand />
						{activeDropdown ? (
							<DropdownApps setActiveDropdown={setActiveDropdown} />
						) : null}
					</Tab>
				) : null}
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
