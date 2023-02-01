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
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useApp from '../hooks/useApp';
import NavBarTabs from './NavBarTabs';
import PersonalZone from './PersonalZone';

const NavBar = ({ setActiveDropdown, activeDropdown }) => {
	const apps = useSelector((state) => state.marginMore);
	const dispatch = useDispatch();
	const ref = useRef(null);
	useEffect(() => {
		dispatch({
			type: 'SET_MARGIN_MORE',
			payload: ref.current ? ref.current.offsetLeft : 0,
		});
	}, [ref.current, apps]);
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
				<Tab
					variant='more'
					onClick={() => setActiveDropdown(!activeDropdown)}
					ref={ref}
				>
					<Text variant='three' color={colors.grey.five} mt={12}>
						more...
					</Text>
					<MiniArrowIcon />
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
