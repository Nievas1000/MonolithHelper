import { colors } from 'design-kit-codojo';

// Metodo recursivo para buscar las relaciones de los nodos dependiendo el degree establecido por el usuario, recorremos todas las relaciones de la apliacion, buscando la similitud con los nodos seleccionados
export const recursiveMethodTable = (
	nodes,
	edges,
	app,
	nodesToShow,
	getName
) => {
	const max = nodes.length;
	let posY = 450;
	let relationsExtends = [];
	for (let i = 1; i < max; i++) {
		let posX = -150;
		relationsExtends = app.relationsExtends.flatMap((node) =>
			node.uses.map((child) => {
				const classNameNode = getName(node.classe);
				const classNameChild = getName(child.name);
				if (nodes[i].data.id !== classNameChild) {
					return null;
				}
				if (
					nodes.find((data) => data.data.id === classNameNode) === undefined
				) {
					nodes.push({
						data: {
							id: classNameNode,
							selectColor: colors.background.two,
							selectBorder: colors.primary.two,
							extend: true,
							path: node.classe,
							classe: true,
						},
						position: {
							x: posX,
							y: Math.random() * (posY - 450) + posY,
						},
					});
				}
				posY += 40;
				posX += 150;
				return {
					data: {
						id: `${classNameChild}-${classNameNode}`,
						source: classNameNode,
						target: classNameChild,
					},
				};
			})
		);

		const usedClasses = app.usedClasses.flatMap((node) =>
			node.uses.map((child) => {
				const classNameNode = getName(node.classe);
				const classNameChild = getName(child.name);
				if (nodes[i].data.id !== classNameChild) {
					return null;
				}
				if (
					nodes.find((data) => data.data.id === classNameNode) === undefined
				) {
					nodes.push({
						data: {
							id: classNameNode,
							selectColor: colors.background.two,
							selectBorder: colors.primary.two,
							path: node.classe,
							classe: true,
						},
						position: {
							x: posX,
							y: Math.random() * (posY - 450) + posY,
						},
					});
				}
				posY += 20;
				posX += 150;
				return {
					data: {
						id: `${classNameChild}-${classNameNode}`,
						source: classNameNode,
						target: classNameChild,
					},
				};
			})
		);
		relationsExtends.map((x) => (x !== null ? edges.push(x) : null));
		usedClasses.map((x) => (x !== null ? edges.push(x) : null));
	}
};
