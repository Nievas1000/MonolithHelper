import { colors } from 'design-kit-codojo';

// Metodo encargado de recorrer las clases para definir si son o no encapsuladas
const metricOfClass = (nodes, edges, app, classe, tables) => {
	let relationsExtends = [];
	const nonEncapsulates = [];
	const nonEncapsulatesTables = [];
	for (let i = 0; i < nodes.length; i++) {
		relationsExtends = app.relationsExtends.flatMap((node) =>
			node.extend.map((child) => {
				if (nodes[i].data.id !== node.classe) {
					return null;
				}
				if (nodes.find((data) => data.data.id === child.name) === undefined) {
					nodes.push({
						data: {
							id: child.name,
						},
					});
				}
				return {
					data: {
						id: `${node.classe}-${child.name}`,
						source: node.classe,
						target: child.name,
					},
				};
			})
		);

		const usedClasses = app.usedClasses.flatMap((node) =>
			node.use.map((child) => {
				if (nodes[i].data.id !== node.classe) {
					return null;
				}
				if (nodes.find((data) => data.data.id === child.name) === undefined) {
					nodes.push({
						data: {
							id: child.name,
							selectColor: colors.background.two,
							selectBorder: colors.primary.two,
						},
					});
				}
				return {
					data: {
						id: `${node.classe}-${child.name}`,
						source: node.classe,
						target: child.name,
					},
				};
			})
		);
		app.tables.map((node) => {
			if (nodes[i].data.id !== node.classe) {
				return null;
			}
			if (tables.find((data) => data.data.id === node.table) === undefined) {
				tables.push({
					data: {
						id: node.table,
					},
				});
			} else {
				nonEncapsulatesTables.push(node.table);
			}
			return {
				data: {
					id: `${node.classe}-${node.table}`,
					source: node.classe,
					target: node.table,
				},
			};
		});

		relationsExtends.map((x) => (x !== null ? edges.push(x) : null));
		usedClasses.map((x) => (x !== null ? edges.push(x) : null));
	}

	// Recorremos para encontrar las clases non-encapsulated
	edges.forEach((edge) => {
		const currentNode = { id: edge.data.id, node: edge.data.target };
		edges.forEach((edge2) => {
			if (
				currentNode.id !== edge2.data.id &&
				currentNode.node === edge2.data.target &&
				currentNode.node !== classe
			) {
				if (!nonEncapsulates.includes(currentNode.node)) {
					nonEncapsulates.push(currentNode.node);
				}
			}
		});
	});
	return {
		interfaces: [],
		nonEncapsulatedClasses: nonEncapsulates.length,
		encapsulatedClasses:
			nonEncapsulates.length > 0
				? nodes.length - nonEncapsulates.length - 1
				: nodes.length,
		encapsulatedTables:
			nonEncapsulatesTables.length > 0
				? tables.length - nonEncapsulatesTables.length
				: tables.length,
		nonEncapsulatedTables: nonEncapsulatesTables.length,
		nonEncapsulatedData: nonEncapsulates.concat(nonEncapsulatesTables),
	};
};

export default metricOfClass;
