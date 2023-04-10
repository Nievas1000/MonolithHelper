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
	const nonEcxlusiveClasses = [];
	const nonEcxlusiveTables = [];
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
						path: child.name,
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
						path: child.name,
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
						path: child.name,
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
				if (tables.find((data) => data.path === child.name) === undefined) {
					tables.push({
						path: child.name,
					});
				} else {
					if (
						nonEcxlusiveTables.find((data) => data.path === child.name) ===
						undefined
					) {
						nonEcxlusiveTables.push({
							path: child.name,
							table: true,
						});
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
	const arr = [];
	edges.forEach((edge) => {
		const currentNode = { id: edge.data.id, node: edge.data.target };
		if (edge.data.interface !== undefined) {
			if (
				interfaces.find((data) => data.className === currentNode.node) ===
				undefined
			) {
				interfaces.push({
					className: currentNode.node,
					path: edge.data.path,
				});
			}
		}
		if (
			arr.find((data) => data.className === currentNode.node) === undefined &&
			edge.data.interface === undefined &&
			currentNode.node !== classe
		) {
			arr.push({
				className: currentNode.node,
				path: edge.data.path,
			});
		}
		edges.forEach((edge2) => {
			if (
				currentNode.id !== edge2.data.id &&
				currentNode.node === edge2.data.target &&
				currentNode.node !== classe &&
				edge.data.interface === undefined
			) {
				if (
					nonEcxlusiveClasses.find(
						(data) => data.className === currentNode.node
					) === undefined
				) {
					nonEcxlusiveClasses.push({
						className: currentNode.node,
						path: edge.data.path,
					});
				}
			}
		});
	});
	const exlusiveClasses = arr.filter(
		(ele) =>
			nonEcxlusiveClasses.find((data) => data.className === ele.className) ===
			undefined
	);
	const exclusiveTables = tables.filter(
		(ele) =>
			nonEcxlusiveTables.find((data) => data.path === ele.path) === undefined &&
			ele.path
	);
	return {
		interfaces,
		nonEcxlusiveClasses,
		exlusiveClasses,
		exclusiveTables: exclusiveTables.length > 0 ? exclusiveTables : tables,
		nonEcxlusiveTables,
		nonEncapsulatedData: nonEcxlusiveClasses.concat(nonEcxlusiveTables),
		showNodes: 0,
		fathers: null,
		className: null,
	};
};

export default metricOfClass;
