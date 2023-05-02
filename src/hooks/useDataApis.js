import { useSelector } from 'react-redux';

const getName = (name) => {
	const cadena = name.split('.');
	const className = cadena[cadena.length - 1];

	return className;
};

const analizeRelations = (data, endpoint, dataApi, table) => {
	data.flatMap((node) =>
		node.uses.forEach((child) => {
			if (endpoint === node.classe) {
				if (!dataApi.releatedClasses.includes(child.name)) {
					dataApi.releatedClasses.push(child.name);
				}
			}
			if (!table) {
				if (endpoint === child.name) {
					if (!dataApi.fathers.includes(node.classe)) {
						dataApi.fathers.push(node.classe);
					}
				}
			}
		})
	);
};

const analizeNonEncapsulated = (data, endpoint, dataApi, table) => {
	data.flatMap((node) =>
		node.uses.forEach((child) => {
			if (endpoint === node.classe) {
				if (!dataApi.releatedClasses.includes(child.name)) {
					dataApi.releatedClasses.push(child.name);
				} else {
					if (table) {
						if (!dataApi.NonExclusiveTables.includes(child.name)) {
							dataApi.NonExclusiveTables.push(child.name);
						}
					} else {
						if (!dataApi.NonExclusiveClasses.includes(child.name)) {
							dataApi.NonExclusiveClasses.push(child.name);
						}
					}
				}
			}
		})
	);
};

export const useDataApis = () => {
	const app = useSelector((state) => state.selectedApp);
	const endpoints = app.endpoints[0];
	const data = [];
	for (let i = 0; i < endpoints.length; i++) {
		const dataApi = {
			path: endpoints[i],
			className: getName(endpoints[i]),
			releatedClasses: [],
			NonExclusiveClasses: [],
			tables: [],
			NonExclusiveTables: [],
			fathers: [],
			dataExclusive: 0,
		};
		analizeRelations(app.relationsExtends, endpoints[i], dataApi, false); // Extends

		analizeRelations(app.usedClasses, endpoints[i], dataApi, false); // Used classes

		analizeRelations(app.tables, endpoints[i], dataApi, true); // Tables

		for (let i = 0; i < dataApi.releatedClasses.length; i++) {
			analizeNonEncapsulated(
				app.relationsExtends,
				dataApi.releatedClasses[i],
				dataApi,
				false
			);

			analizeNonEncapsulated(
				app.usedClasses,
				dataApi.releatedClasses[i],
				dataApi,
				false
			);

			app.tables.flatMap((node) =>
				node.uses.forEach((child) => {
					if (dataApi.releatedClasses[i] === node.classe) {
						if (!dataApi.tables.includes(child.name)) {
							dataApi.tables.push(child.name);
						} else {
							if (!dataApi.NonExclusiveTables.includes(child.name)) {
								dataApi.NonExclusiveTables.push(child.name);
							}
						}
					}
				})
			);
		}
		const a =
			dataApi.releatedClasses.length -
			dataApi.NonExclusiveClasses.length +
			dataApi.tables.length -
			dataApi.NonExclusiveTables.length;

		const b = dataApi.releatedClasses.length + dataApi.tables.length;

		dataApi.dataExclusive = (a / b) * 100;
		data.push(dataApi);
	}
	return [data];
};
