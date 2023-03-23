import { colors } from 'design-kit-codojo';

// Metodo encargado de recorrer las clases para definir si son o no encapsuladas
const metricOfClass = (nodes, edges, app, classe, tables, getName) => {
	let relationsExtends = [];
	const nonEncapsulates = [];
	const nonEncapsulatesTables = [];
	for (let i = 0; i < nodes.length; i++) {
		relationsExtends = app.relationsExtends.flatMap((node) =>
			node.extend.map((child) => {
				const classNameNode = getName(node.classe);
				if (nodes[i].data.id !== classNameNode) {
					return null;
				}
				const classNameChild = getName(child.name);
				if (
					nodes.find((data) => data.data.id === classNameChild) === undefined
				) {
					nodes.push({
						data: {
							id: classNameChild,
						},
					});
				}
				return {
					data: {
						id: `${classNameNode}-${classNameChild}`,
						source: classNameNode,
						target: classNameChild,
					},
				};
			})
		);

		const usedClasses = app.usedClasses.flatMap((node) =>
			node.use.map((child) => {
				const classNameNode = getName(node.classe);
				if (nodes[i].data.id !== classNameNode) {
					return null;
				}
				const classNameChild = getName(child.name);
				if (
					nodes.find((data) => data.data.id === classNameChild) === undefined
				) {
					nodes.push({
						data: {
							id: classNameChild,
							selectColor: colors.background.two,
							selectBorder: colors.primary.two,
						},
					});
				}
				return {
					data: {
						id: `${classNameNode}-${classNameChild}`,
						source: classNameNode,
						target: classNameChild,
					},
				};
			})
		);
		app.tables.map((node) => {
			const classNameNode = getName(node.classe);
			if (nodes[i].data.id !== classNameNode) {
				return null;
			}
			const tableName = getName(node.table);
			if (tables.find((data) => data.data.id === tableName) === undefined) {
				tables.push({
					data: {
						id: tableName,
					},
				});
			} else {
				nonEncapsulatesTables.push(tableName);
			}
			return {
				data: {
					id: `${classNameNode}-${tableName}`,
					source: classNameNode,
					target: tableName,
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
