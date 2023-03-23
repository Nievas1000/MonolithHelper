import {
	ArrowIconExpand,
	ArrowIconLess,
	SelectClasses,
	Text,
	ContainerClasses,
	InputSearchClass,
	SearchIcon,
} from 'design-kit-codojo';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import useSearchClasses from '../../hooks/useSearchClasses';
import ClassesInDropdown from './ClassesInDropdown';
const DropdownClasses = () => {
	const selectedClass = useSelector((state) => state.selectedClass);
	const [showClasses, setShowClasses] = useState(false);
	const [selectedApp, classes, handleChange, selectClass] = useSearchClasses();
	return (
		<div className='d-block'>
			<SelectClasses
				variant={showClasses ? 'active' : 'primary'}
				onClick={() => setShowClasses(!showClasses)}
			>
				<Text variant='two' mt={14} mr={22}>
					{selectedClass.length > 15
						? `${selectedClass.substring(0, 15)}...`
						: selectedClass}
				</Text>
				{showClasses ? <ArrowIconLess /> : <ArrowIconExpand />}
			</SelectClasses>
			{showClasses ? (
				<ContainerClasses className='drop-classes'>
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
							setShowClasses={setShowClasses}
						/>
					</div>
				</ContainerClasses>
			) : null}
		</div>
	);
};

export default DropdownClasses;
