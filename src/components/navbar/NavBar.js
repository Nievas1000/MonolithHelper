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
import { NavLink } from 'react-router-dom';
import { useAddapp } from '../../hooks/useAddapp';
import useApp from '../../hooks/useApp';
import useDropdown from '../../hooks/useDropdown';
import DropdownApps from './DropdownApps';
import NavBarTabs from './NavBarTabs';
import PersonalZone from './PersonalZone';

const NavBar = () => {
	const apps = useSelector((state) => state.allApps);
	const [addApplication] = useAddapp();
	const info = useSelector((state) => state.info);
	const [showDropdow, setShowDropdown, divRefSon, divRefFather] = useDropdown();

	useApp();
	return (
		<NavBarContainer>
			<ContainerTabs>
				<OpenAppTab className='open-app'>
					<CodojoLogoColor />
					<Text variant='three' color={colors.grey.five} mt={13}>
						Applications
					</Text>
				</OpenAppTab>
				<NavBarTabs />
				{apps.length > 3 ? (
					<Tab
						variant='more'
						onClick={() => setShowDropdown(!showDropdow)}
						ref={divRefFather}
					>
						<Text variant='two' color={colors.grey.five} mt={16}>
							more...
						</Text>
						<MiniArrowIconExpand />
						{showDropdow ? (
							<DropdownApps
								setActiveDropdown={showDropdow}
								divRefSon={divRefSon}
							/>
						) : null}
					</Tab>
				) : null}

				<NavLink
					style={({ isActive }) => ({
						backgroundColor: info ? colors.background.one : 'transparent',
					})}
					className='link'
					to={'/how-to-add-application'}
				>
					<AddApplication className='add-app' onClick={() => addApplication()}>
						<AddIcon />
						<Text variant='two' color={colors.primary.two}>
							Add application
						</Text>
					</AddApplication>
				</NavLink>
			</ContainerTabs>
			<PersonalZone />
		</NavBarContainer>
	);
};

export default NavBar;
