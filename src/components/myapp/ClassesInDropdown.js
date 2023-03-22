import { Text, TabDropdown } from 'design-kit-codojo';

const ClassesInDropdown = ({
	selectedClass,
	selectedApp,
	classes,
	selectClass,
	setShowClasses,
	showClasses,
}) => {
	const classesInit = selectedApp.classes[0].sort();
	const handleDrop = (classe) => {
		selectClass(classe, setShowClasses);
		setShowClasses(false);
	};
	return (
		<div className='w'>
			{selectedApp && classes.length === 0
				? classesInit.map((classe) => {
						return (
							<TabDropdown
								className='s'
								variant={selectedClass === classe ? 'active' : 'primary'}
								key={classe}
								onClick={() => handleDrop(classe)}
							>
								<Text variant='two' mt={12} alt={'Hola'} title={classe}>
									{classe}
								</Text>
							</TabDropdown>
						);
				  })
				: classes.map((classe) => {
						return (
							<TabDropdown
								variant={selectedClass === classe ? 'active' : 'primary'}
								key={classe}
								onClick={() => handleDrop(classe)}
							>
								<Text variant='two' mt={12}>
									{classe}
								</Text>
							</TabDropdown>
						);
				  })}
		</div>
	);
};

export default ClassesInDropdown;
