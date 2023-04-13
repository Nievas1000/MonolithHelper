import { Container, CrossIconWhite, Title, colors } from 'design-kit-codojo';
import { NavLink } from 'react-router-dom';

export const UserMenuMobile = ({
	setShowDropdown,
	showDropdow,
	divRefFather,
}) => {
	const handleLogout = () => {
		localStorage.clear();
		window.location.href = 'https://www.codojo.io/';
	};
	return (
		<Container
			className='mobile-user-menu'
			bg={colors.background.three}
			ref={divRefFather}
		>
			<Container className='d-flex justify-content-end' mt={10} mr={25}>
				<div onClick={() => setShowDropdown(!showDropdow)}>
					<CrossIconWhite />
				</div>
			</Container>
			<div
				className='d-flex justify-content-center align-items-center'
				style={{ height: '100vh' }}
			>
				<div>
					<NavLink to='/settings' style={{ textDecoration: 'none' }}>
						<Title variant='three' color={colors.grey.five}>
							Settings
						</Title>
					</NavLink>
					<Title
						variant='three'
						mt={60}
						color={colors.grey.five}
						onClick={handleLogout}
					>
						Sign out
					</Title>
				</div>
			</div>
		</Container>
	);
};
