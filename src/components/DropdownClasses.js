import {
	ArrowIconExpand,
	ArrowIconLess,
	SelectClasses,
	Text,
	ContainerClasses,
	InputSearchClass,
	SearchIcon,
	TabDropdown,
} from 'design-kit-codojo';
import { useState } from 'react';
import useSearchClasses from '../hooks/useSearchClasses';
const DropdownClasses = () => {
	const [showClasses, setShowClasses] = useState(false);
	const [selectedApp, classes, handleChange, selectedClass, selectClass] =
		useSearchClasses();
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
				<ContainerClasses>
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
						{selectedApp && classes.length === 0
							? selectedApp.classes[0].map((classe) => {
									return (
										<TabDropdown
											variant={selectedClass === classe ? 'active' : 'primary'}
											key={classe}
											onClick={() => selectClass(classe)}
										>
											<Text variant='two' mt={12}>
												{classe.length > 40
													? `${classe.substring(0, 40)}...`
													: classe}
											</Text>
										</TabDropdown>
									);
							  })
							: classes.map((classe) => {
									return (
										<TabDropdown
											variant={selectedClass === classe ? 'active' : 'primary'}
											key={classe}
											onClick={() => selectClass(classe)}
										>
											<Text variant='two' mt={12}>
												{classe.length > 40
													? `${classe.substring(0, 40)}...`
													: classe}
											</Text>
										</TabDropdown>
									);
							  })}
					</div>
				</ContainerClasses>
			) : null}
		</div>
	);
};

export default DropdownClasses;
