import { Text, TabDropdown } from 'design-kit-codojo';

const ClassesInDropdown = ({
	selectedClass,
	selectedApp,
	classes,
	selectClass,
	setShowClasses,
	showClasses,
}) => {
	const handleDrop = (classe) => {
		selectClass(classe);
		setShowClasses(false);
	};
	return (
		<div>
			{selectedApp && classes.length === 0
				? selectedApp.classes[0].map((classe) => {
						return (
							<TabDropdown
								variant={selectedClass === classe ? 'active' : 'primary'}
								key={classe}
								onClick={() => handleDrop(classe)}
							>
								<Text variant='two' mt={12} alt={'Hola'} title={classe}>
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
								onClick={() => handleDrop(classe)}
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
	);
};

export default ClassesInDropdown;