import { colors } from 'design-kit-codojo';
import interfaceIcon from '../utils/graphIcons/Interface.svg';
import databaseIcon from '../utils/graphIcons/Database.svg';

// Metodo recursivo para buscar las relaciones de los nodos dependiendo el degree establecido por el usuario, recorremos todas las relaciones de la apliacion, buscando la similitud con los nodos seleccionados
export const recursiveMethod = (nodes, posX, edges, app) => {
	const max = nodes.length;
	let posY = 350;
	for (let i = 1; i < max; i++) {
		const relationsExtends = app.relationsExtends.map((node) => {
			if (nodes[i].data.id !== node.classe) {
				return null;
			}
			if (
				nodes.find((data) => data.data.id === node.extend.name) === undefined
			) {
				nodes.push({
					data: {
						id: node.extend.name,
						selectColor: colors.background.two,
						selectBorder: colors.primary.two,
						extend: true,
					},
					position: {
						x: posX,
						y: Math.random() * (posY - 450) + posY,
					},
				});
			}
			posY += 20;
			posX += 110;
			return {
				data: {
					id: `${node.classe}-${node.extend.name}`,
					source: node.classe,
					target: node.extend.name,
				},
			};
		});
		const relationsImplements = app.relationsImplement.map((node) => {
			if (nodes[i].data.id !== node.classe) {
				return null;
			}
			if (
				nodes.find((data) => data.data.id === node.implement.name) === undefined
			) {
				nodes.push({
					data: {
						id: node.implement.name,
						logo: interfaceIcon,
						parent: 'parent',
					},
					position: {
						x: posX,
						y: Math.random() * (posY - 450) + posY,
					},
				});
			}
			posY += 20;
			posX += 110;
			return {
				data: {
					id: `${node.classe}-${node.implement.name}`,
					source: node.classe,
					target: node.implement.name,
				},
			};
		});
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
						position: {
							x: posX,
							y: Math.random() * (posY - 450) + posY,
						},
					});
				}
				posY += 20;
				posX += 110;
				return {
					data: {
						id: `${node.classe}-${child.name}`,
						source: node.classe,
						target: child.name,
					},
				};
			})
		);
		const tables = app.tables.map((node) => {
			if (nodes[i].data.id !== node.classe) {
				return null;
			}
			nodes.push({
				data: {
					id: node.table,
					logo: databaseIcon,
				},
				position: {
					x: posX,
					y: Math.random() * (posY - 450) + posY,
				},
			});
			posY += 20;
			posX += 110;
			return {
				data: {
					id: `${node.classe}-${node.table}`,
					source: node.classe,
					target: node.table,
				},
			};
		});
		relationsImplements.map((x) => (x !== null ? edges.push(x) : null));
		relationsExtends.map((x) => (x !== null ? edges.push(x) : null));
		usedClasses.map((x) => (x !== null ? edges.push(x) : null));
		tables.map((x) => (x !== null ? edges.push(x) : null));
	}
	return [edges, nodes];
};
