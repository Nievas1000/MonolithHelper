import { colors } from 'design-kit-codojo';
import { useSelector } from 'react-redux';
import { recursiveMethod } from '../utils/recursiveMethod';
import interfaceIcon from '../utils/graphIcons/Interface.svg';
import databaseIcon from '../utils/graphIcons/Database.svg';
import metricOfClass from '../utils/metricsOfClass';

// Con este hook le creamos los nodes y edges mediante las relaciones extraidas del json de la app seleccionada
const useNodes = (recursiveNodes = 0) => {
	const state = useSelector((state) => state);
	const nodesToShow = state.infoGraph;
	const app = state.selectedApp;
	const classe = state.selectedClass;
	let pos = -150;
	let relationsExtends = [];
	let relationsImplements = [];
	let tables = [];
	const metricEdges = [];
	const metricNodes = [];
	const metricTables = [];
	const extendToNonUse = [];
	const nodes =
		classe === 'Select class...'
			? []
			: [
					{
						data: {
							id: classe,
							selectColor: colors.primary.two,
							selectBorder: colors.grey.ten,
						},
						position: { x: 10.66666666666671, y: 100.00000000000006 },
					},
			  ];
	relationsExtends = app.relationsExtends.flatMap((node) =>
		node.extend.map((child) => {
			if (classe !== node.classe) {
				return null;
			}
			metricNodes.push({
				data: {
					id: child.name,
				},
			});
			extendToNonUse.push({
				data: {
					id: child.name,
				},
			});
			pos += 110;
			if (nodesToShow.extends) {
				nodes.push({
					data: {
						id: child.name,
						selectColor: colors.background.two,
						selectBorder: colors.complementary.four,
						extend: true,
					},
					position: {
						x: pos,
						y: Math.random() * (350 - 450) + 350,
					},
				});
				return {
					data: {
						id: `${node.classe}-${child.name}`,
						source: node.classe,
						target: child.name,
					},
				};
			} else {
				return null;
			}
		})
	);
	if (nodesToShow.interfaces) {
		relationsImplements = app.relationsImplement.map((node) => {
			if (classe !== node.classe) {
				return null;
			}
			nodes.push({
				data: {
					id: node.implement.name,
					logo: interfaceIcon,
				},
				position: {
					x: pos,
					y: Math.random() * (350 - 450) + 350,
				},
			});
			pos += 110;
			return {
				data: {
					id: `${node.classe}-${node.implement.name}`,
					source: node.classe,
					target: node.implement.name,
				},
			};
		});
	}
	const usedClasses = app.usedClasses.flatMap((node) =>
		node.use.map((child) => {
			if (classe !== node.classe) {
				return null;
			}
			if (
				metricNodes.find((data) => data.data.id === child.name) === undefined
			) {
				metricNodes.push({
					data: {
						id: child.name,
					},
				});
			}
			if (
				extendToNonUse.find((data) => data.data.id === child.name) === undefined
			) {
				nodes.push({
					data: {
						id: child.name,
						selectColor: colors.background.two,
						selectBorder: colors.primary.two,
					},
					position: {
						x: pos,
						y: Math.random() * (350 - 450) + 350,
					},
				});
				pos += 110;
				return {
					data: {
						id: `${node.classe}-${child.name}`,
						source: node.classe,
						target: child.name,
					},
				};
			} else {
				return null;
			}
		})
	);
	if (nodesToShow.tables) {
		tables = app.tables.map((node) => {
			if (classe !== node.classe) {
				return null;
			}
			metricTables.push({
				data: {
					id: node.table,
				},
			});
			nodes.push({
				data: {
					id: node.table,
					logo: databaseIcon,
				},
				position: {
					x: pos,
					y: Math.random() * (350 - 450) + 350,
				},
			});
			pos += 110;
			return {
				data: {
					id: `${node.classe}-${node.table}`,
					source: node.classe,
					target: node.table,
				},
			};
		});
	}
	// Zona en la que creamos los arreglos para hacer la recursividad de las metricas
	relationsExtends.map((x) => (x !== null ? metricEdges.push(x) : null));
	usedClasses.map((x) => (x !== null ? metricEdges.push(x) : null));
	const nonEncapsulates = metricOfClass(
		metricNodes,
		metricEdges,
		app,
		classe,
		metricTables
	);

	// Zona para mostrar los nodes
	const edges = [];
	relationsImplements.map((x) => (x !== null ? edges.push(x) : null));
	relationsExtends.map((x) => (x !== null ? edges.push(x) : null));
	usedClasses.map((x) => (x !== null ? edges.push(x) : null));
	tables.map((x) => (x !== null ? edges.push(x) : null));

	// Zona para manejar el nivel de los degree
	if (recursiveNodes > 1 && recursiveNodes <= 5) {
		for (let i = 0; i < recursiveNodes - 1; i++) {
			recursiveMethod(nodes, edges, app, nodesToShow);
		}
	}
	return [edges, nodes, nonEncapsulates];
};

export default useNodes;
