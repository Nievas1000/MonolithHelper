import { colors } from 'design-kit-codojo';
import { useSelector } from 'react-redux';
import { recursiveMethod } from '../utils/recursiveMethod';
import interfaceIcon from '../utils/graphIcons/Interface.svg';
import table from '../utils/graphIcons/Table.svg';
import nonEncapsulatedTable from '../utils/graphIcons/NonEncapsulatedTable.svg';
import metricOfClass from '../utils/metricsOfClass';

const getName = (name) => {
	const cadena = name.split('.');
	const className = cadena[cadena.length - 1];

	return className;
};
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
	const metricInterfaces = [];
	const extendToNonUse = [];
	const fathers = [];
	const className = getName(classe);
	const nodes =
		classe === 'Select class...'
			? []
			: [
					{
						data: {
							id: className,
							selectColor: colors.primary.two,
							selectBorder: colors.grey.ten,
							path: classe,
						},
						position: { x: 10.66666666666671, y: 100.00000000000006 },
					},
			  ];
	relationsExtends = app.relationsExtends.flatMap((node) =>
		node.uses.map((child) => {
			const classNameChild = getName(child.name);
			const classNameNode = getName(node.classe);
			if (
				fathers.find((data) => data.className === classNameNode) ===
					undefined &&
				classe === child.name
			) {
				fathers.push({
					className: classNameNode,
					path: node.classe,
				});
			}
			if (classe !== node.classe) {
				return null;
			}
			metricNodes.push({
				data: {
					id: classNameChild,
				},
			});
			extendToNonUse.push({
				data: {
					id: classNameChild,
				},
			});
			pos += 110;

			if (metricNodes.length > 0) {
				if (
					metricNodes.find((data) => data.data.id === classNameChild) ===
					undefined
				) {
					nodes.push({
						data: {
							id: classNameChild,
							selectColor: colors.background.two,
							selectBorder: colors.feedback.warning,
							extend: true,
							path: child.name,
							classe: true,
						},
						position: {
							x: pos,
							y: Math.random() * (350 - 450) + 350,
						},
					});
				} else {
					nodes.push({
						data: {
							id: classNameChild,
							selectColor: colors.background.two,
							selectBorder: colors.primary.two,
							extend: true,
							path: child.name,
							classe: true,
						},
						position: {
							x: pos,
							y: Math.random() * (350 - 450) + 350,
						},
					});
				}
			}
			return {
				data: {
					id: `${classNameNode}-${classNameChild}`,
					source: classNameNode,
					target: classNameChild,
					path: child.name,
				},
			};
		})
	);
	if (nodesToShow.interfaces) {
		relationsImplements = app.relationsImplement.flatMap((node) =>
			node.uses.map((child) => {
				const classNameImplement = getName(child.name);
				const classNameNode = getName(node.classe);
				if (
					fathers.find((data) => data.className === classNameNode) ===
						undefined &&
					classe === child.name
				) {
					fathers.push({
						className: classNameNode,
						path: node.classe,
					});
				}
				if (classe !== node.classe) {
					return null;
				}
				if (
					metricInterfaces.find(
						(data) => data.className === classNameImplement
					) === undefined
				) {
					metricInterfaces.push({
						className: classNameImplement,
						path: child.name,
					});
				}
				nodes.push({
					data: {
						id: classNameImplement,
						logo: interfaceIcon,
						interface: true,
						path: child.name,
					},
					position: {
						x: pos,
						y: Math.random() * (350 - 450) + 350,
					},
				});
				pos += 110;
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
			const classNameChild = getName(child.name);
			const classNameNode = getName(node.classe);
			if (
				fathers.find((data) => data.className === classNameNode) ===
					undefined &&
				classe === child.name
			) {
				fathers.push({
					className: classNameNode,
					path: node.classe,
				});
			}
			if (classe !== node.classe) {
				return null;
			}
			if (
				metricNodes.find((data) => data.data.id === classNameChild) ===
				undefined
			) {
				metricNodes.push({
					data: {
						id: classNameChild,
					},
				});
			}
			if (
				extendToNonUse.find((data) => data.data.id === classNameChild) ===
				undefined
			) {
				nodes.push({
					data: {
						id: classNameChild,
						selectColor: colors.background.two,
						selectBorder: colors.primary.two,
						path: child.name,
						classe: true,
					},
					position: {
						x: pos,
						y: Math.random() * (350 - 450) + 350,
					},
				});
				pos += 110;
				return {
					data: {
						id: `${classNameNode}-${classNameChild}`,
						source: classNameNode,
						target: classNameChild,
						path: child.name,
					},
				};
			} else {
				return null;
			}
		})
	);
	if (nodesToShow.tables) {
		tables = app.tables.flatMap((node) =>
			node.uses.map((child) => {
				if (classe !== node.classe) {
					return null;
				}
				const classNameNode = getName(node.classe);
				if (metricTables.find((data) => data.id === child.name) === undefined) {
					metricTables.push({
						id: child.name,
						path: child.name,
					});
				}
				nodes.push({
					data: {
						id: child.name,
						logo: table,
						table: true,
						path: child.name,
					},
					position: {
						x: pos,
						y: Math.random() * (350 - 450) + 350,
					},
				});
				pos += 110;
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
	// Zona en la que creamos los arreglos para hacer la recursividad de las metricas
	relationsExtends.map((x) => (x !== null ? metricEdges.push(x) : null));
	usedClasses.map((x) => (x !== null ? metricEdges.push(x) : null));
	const nonEncapsulates = metricOfClass(
		metricNodes,
		metricEdges,
		app,
		className,
		metricTables,
		metricInterfaces,
		getName
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
			recursiveMethod(nodes, edges, app, nodesToShow, getName);
		}
	}
	nodes.forEach((node) => {
		if (
			nonEncapsulates.nonEncapsulatedData.find(
				(data) => data.className === node.data.id
			) !== undefined
		) {
			if (node.data.table) {
				node.data.logo = nonEncapsulatedTable;
			} else {
				node.data.selectBorder = '#F9D758';
			}
		}
	});
	nonEncapsulates.showNodes = nodes.length;
	nonEncapsulates.fathers = fathers;
	nonEncapsulates.className = className;
	return [edges, nodes, nonEncapsulates, getName];
};

export default useNodes;
