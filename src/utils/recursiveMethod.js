import { colors } from 'design-kit-codojo';
import interfaceIcon from '../utils/graphIcons/Interface.svg';
import table from '../utils/graphIcons/Table.svg';

// Metodo recursivo para buscar las relaciones de los nodos dependiendo el degree establecido por el usuario, recorremos todas las relaciones de la apliacion, buscando la similitud con los nodos seleccionados
export const recursiveMethod = (nodes, edges, app, nodesToShow, getName) => {
	const max = nodes.length;
	let posY = 450;
	let relationsExtends = [];
	let relationsImplements = [];
	let tables = [];
	for (let i = 1; i < max; i++) {
		let posX = -150;
		relationsExtends = app.relationsExtends.flatMap((node) =>
			node.uses.map((child) => {
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
							extend: true,
							path: child.name,
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
						id: `${classNameNode}-${classNameChild}`,
						source: classNameNode,
						target: classNameChild,
					},
				};
			})
		);
		if (nodesToShow.interfaces) {
			relationsImplements = app.relationsImplement.flatMap((node) =>
				node.uses.map((child) => {
					const classNameNode = getName(node.classe);
					if (nodes[i].data.id !== classNameNode) {
						return null;
					}
					const classNameImplement = getName(child.name);
					if (
						nodes.find((data) => data.data.id === classNameImplement) ===
						undefined
					) {
						nodes.push({
							data: {
								id: classNameImplement,
								logo: interfaceIcon,
								parent: 'parent',
								interface: true,
								path: child.name,
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
							id: `${classNameNode}-${classNameImplement}`,
							source: classNameNode,
							target: classNameImplement,
						},
					};
				})
			);
		}
		const usedClasses = app.usedClasses.flatMap((node) =>
			node.uses.map((child) => {
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
							path: child.name,
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
						id: `${classNameNode}-${classNameChild}`,
						source: classNameNode,
						target: classNameChild,
					},
				};
			})
		);
		if (nodesToShow.tables) {
			tables = app.tables.flatMap((node) =>
				node.uses.map((child) => {
					const classNameNode = getName(node.classe);
					if (nodes[i].data.id !== classNameNode) {
						return null;
					}
					nodes.push({
						data: {
							id: child.name,
							logo: table,
							table: true,
							path: child.name,
						},
						position: {
							x: posX,
							y: Math.random() * (posY - 450) + posY,
						},
					});
					posY += 20;
					posX += 150;
					return {
						data: {
							id: `${classNameNode}-${child.name}`,
							source: classNameNode,
							target: child.name,
						},
					};
				})
			);
		}
		relationsImplements.map((x) => (x !== null ? edges.push(x) : null));
		relationsExtends.map((x) => (x !== null ? edges.push(x) : null));
		usedClasses.map((x) => (x !== null ? edges.push(x) : null));
		tables.map((x) => (x !== null ? edges.push(x) : null));
	}
};
