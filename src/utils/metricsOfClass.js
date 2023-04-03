import { colors } from 'design-kit-codojo';

// Metodo encargado de recorrer las clases para definir si son o no encapsuladas
const metricOfClass = (
	nodes,
	edges,
	app,
	classe,
	tables,
	interfaces,
	getName
) => {
	let relationsExtends = [];
	let relationsImplement = [];
	const nonEncapsulates = [];
	const nonEncapsulatesTables = [];
	for (let i = 0; i < nodes.length; i++) {
		relationsExtends = app.relationsExtends.flatMap((node) =>
			node.uses.map((child) => {
				const classNameNode = getName(node.classe);
				if (nodes[i].data.id !== classNameNode) {
					return null;
				}
				const classNameChild = getName(child.name);
				if (
					nodes.find((data) => data.data.id === classNameChild) === undefined &&
					classNameChild !== classe
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
		relationsImplement = app.relationsImplement.flatMap((node) =>
			node.uses.map((child) => {
				const classNameNode = getName(node.classe);
				if (nodes[i].data.id !== classNameNode) {
					return null;
				}
				const classNameChild = getName(child.name);
				return {
					data: {
						id: `${classNameNode}-${classNameChild}`,
						source: classNameNode,
						target: classNameChild,
						interface: true,
					},
				};
			})
		);

		const usedClasses = app.usedClasses.flatMap((node) =>
			node.uses.map((child) => {
				const classNameNode = getName(node.classe);
				if (nodes[i].data.id !== classNameNode) {
					return null;
				}
				const classNameChild = getName(child.name);
				if (
					nodes.find((data) => data.data.id === classNameChild) === undefined &&
					classNameChild !== classe
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
		app.tables.flatMap((node) =>
			node.uses.map((child) => {
				const classNameNode = getName(node.classe);
				if (nodes[i].data.id !== classNameNode) {
					return null;
				}
				if (tables.find((data) => data.data.id === child.name) === undefined) {
					tables.push({
						data: {
							id: child.name,
						},
					});
				} else {
					if (
						nonEncapsulatesTables.find((data) => data === child.name) ===
						undefined
					) {
						nonEncapsulatesTables.push(child.name);
					}
				}
				return {
					data: {
						id: `${classNameNode}-${child.name}`,
						source: classNameNode,
						target: child.name,
					},
				};
			})
		);

		relationsImplement.map((x) => (x !== null ? edges.push(x) : null));
		relationsExtends.map((x) => (x !== null ? edges.push(x) : null));
		usedClasses.map((x) => (x !== null ? edges.push(x) : null));
	}
	// Recorremos para encontrar las clases non-encapsulated
	edges.forEach((edge) => {
		const currentNode = { id: edge.data.id, node: edge.data.target };
		if (edge.data.interface !== undefined) {
			if (!interfaces.includes(currentNode.node)) {
				interfaces.push(currentNode.node);
			}
		}
		edges.forEach((edge2) => {
			if (
				currentNode.id !== edge2.data.id &&
				currentNode.node === edge2.data.target &&
				currentNode.node !== classe &&
				edge.data.interface === undefined
			) {
				if (!nonEncapsulates.includes(currentNode.node)) {
					nonEncapsulates.push(currentNode.node);
				}
			}
		});
	});
	console.log(nonEncapsulates);
	return {
		interfaces,
		nonEncapsulatedClasses: nonEncapsulates.length,
		encapsulatedClasses:
			nonEncapsulates.length > 0
				? nodes.length - nonEncapsulates.length
				: nodes.length,
		encapsulatedTables:
			nonEncapsulatesTables.length > 0
				? tables.length - nonEncapsulatesTables.length
				: tables.length,
		nonEncapsulatedTables: nonEncapsulatesTables.length,
		nonEncapsulatedData: nonEncapsulates.concat(nonEncapsulatesTables),
		showNodes: 0,
	};
};

export default metricOfClass;
