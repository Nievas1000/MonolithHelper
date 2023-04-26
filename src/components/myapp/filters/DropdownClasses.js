import {
	ArrowIconExpand,
	ArrowIconLess,
	SelectClasses,
	Text,
	ContainerClasses,
	InputSearchClass,
	SearchIcon,
	colors,
} from 'design-kit-codojo';
import { useSelector } from 'react-redux';
import useDropdown from '../../../hooks/useDropdown';
import useSearchClasses from '../../../hooks/useSearchClasses';
import ClassesInDropdown from './ClassesInDropdown';
const DropdownClasses = () => {
	const selectedClass = useSelector((state) => state.selectedClass);

	const [selectedApp, classes, handleChange, selectClass, setClasses] =
		useSearchClasses();
	const [showDropdow, setShowDropdown, divRefSon, divRefFather] =
		useDropdown(setClasses);
	return (
		<div className='d-block'>
			<SelectClasses
				variant={showDropdow ? 'active' : 'primary'}
				onClick={() => setShowDropdown(!showDropdow)}
				ref={divRefFather}
				className='button-dropdown-classes'
			>
				<Text
					variant='two'
					mt={14}
					mr={22}
					color={colors.grey.nine}
					className='selected-in-dropdown'
				>
					{selectedClass.length > 15
						? `${selectedClass.substring(0, 13)}...`
						: selectedClass}
				</Text>
				{showDropdow ? <ArrowIconLess /> : <ArrowIconExpand />}
			</SelectClasses>
			{showDropdow ? (
				<ContainerClasses className='drop-classes' ref={divRefSon}>
					<div className='search-classes'>
						<InputSearchClass
							placeholder='Search classe...'
							className='input-search'
							onChange={handleChange}
						/>
						<div className='icon-search'>
							<SearchIcon />
						</div>
					</div>
					<div className='container-classes'>
						<ClassesInDropdown
							selectedClass={selectedClass}
							selectedApp={selectedApp}
							classes={classes}
							selectClass={selectClass}
							setShowClasses={setShowDropdown}
						/>
					</div>
				</ContainerClasses>
			) : null}
		</div>
	);
};

export default DropdownClasses;
