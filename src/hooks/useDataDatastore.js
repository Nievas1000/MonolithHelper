import { useSelector } from 'react-redux';

export const useDataDatastores = () => {
	const app = useSelector((state) => state.selectedApp);
	const tables = app.tablesNames[0];
	const data = [];
	for (let i = 0; i < tables.length; i++) {
		const dataTable = {
			datastore: tables[i],
			usedClasses: [],
			usedApps: 1,
		};
		app.tables.flatMap((node) =>
			node.uses.forEach((child) => {
				if (tables[i] === child.name) {
					if (!dataTable.usedClasses.includes(node.classe)) {
						dataTable.usedClasses.push(node.classe);
					}
				}
			})
		);

		data.push(dataTable);
	}

	return [data];
};
