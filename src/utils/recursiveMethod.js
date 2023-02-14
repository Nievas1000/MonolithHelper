import { colors } from 'design-kit-codojo';

// Metodo recursivo para buscar las relaciones de los nodos dependiendo el degree establecido por el usuario, recorremos todas las relaciones de la apliacion, buscando la similitud con los nodos seleccionados
export const recursiveMethod = (nodes, pos, edges, app) => {
	const max = nodes.length;
	for (let i = 1; i < max; i++) {
		const relationsExtends = app.relationsExtends.map((node) => {
			if (nodes[i].data.id !== node.classe) {
				return null;
			}
			if (nodes.find((data) => data.data.id === node.extend) === undefined) {
				nodes.push({
					data: {
						id: node.extend,
						selectName: '',
						selectColor: colors.background.two,
						selectBorder: colors.primary.two,
					},
					position: {
						x: pos,
						y: Math.random() * (100 - 200) + 100,
					},
				});
			}
			pos += 80;
			return {
				data: {
					id: `${node.classe}-${node.extend}`,
					source: node.classe,
					target: node.extend,
				},
			};
		});
		const relationsImplements = app.relationsImplement.map((node) => {
			if (nodes[i].data.id !== node.classe) {
				return null;
			}
			if (nodes.find((data) => data.data.id === node.implement) === undefined) {
				nodes.push({
					data: {
						id: node.implement,
						selectName: '',
						selectColor: colors.background.two,
						selectBorder: colors.primary.two,
					},
					position: {
						x: pos,
						y: Math.random() * (100 - 200) + 100,
					},
				});
			}
			pos += 80;
			return {
				data: {
					id: `${node.classe}-${node.extend}`,
					source: node.classe,
					target: node.implement,
				},
			};
		});
		const usedClasses = app.usedClasses.flatMap((node) =>
			node.use.map((child) => {
				if (nodes[i].data.id !== node.classe) {
					return null;
				}
				if (nodes.find((data) => data.data.id === child) === undefined) {
					nodes.push({
						data: {
							id: child,
							selectName: '',
							selectColor: colors.background.two,
							selectBorder: colors.primary.two,
						},
						position: {
							x: pos,
							y: Math.random() * (100 - 200) + 100,
						},
					});
				}
				pos += 80;
				return {
					data: {
						id: `${node.classe}-${child}`,
						source: node.classe,
						target: child,
					},
				};
			})
		);
		relationsImplements.map((x) => (x !== null ? edges.push(x) : null));
		relationsExtends.map((x) => (x !== null ? edges.push(x) : null));
		usedClasses.map((x) => (x !== null ? edges.push(x) : null));
	}
	return [edges, nodes];
};
