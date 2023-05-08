import { useSelector } from 'react-redux';
import table from '../utils/graphIcons/Table.svg';
import nonExclusiveTable from '../utils/graphIcons/NonEncapsulatedTable.svg';
import { colors } from 'design-kit-codojo';
import { recursiveMethodTable } from '../utils/recursiveMethodTable';

// Con este hook le creamos los nodes y edges en base a una tabla seleccionada
export const useTablesNodes = (recursiveNodes = 0, getName) => {
	const state = useSelector((state) => state);
	const app = state.selectedApp;
	const classe = state.selectedClass;
	const nodesToShow = state.infoGraph;
	let pos = -150;
	let tables = [];
	const classes = [];
	const nodes =
		classe === 'Select class...'
			? []
			: [
					{
						data: {
							id: classe,
							logo: table,
							path: classe,
						},
						position: { x: 10.66666666666671, y: 100.00000000000006 },
					},
			  ];
	tables = app.tables.flatMap((node) =>
		node.uses.map((child) => {
			const classNameNode = getName(node.classe);
			if (classe !== child.name) {
				return null;
			}
			if (!classes.includes(node.classe)) {
				classes.push(node.classe);
			}
			nodes.push({
				data: {
					id: classNameNode,
					selectColor: colors.background.two,
					selectBorder: colors.primary.two,
					extend: true,
					classe: true,
					path: node.classe,
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
	const edges = [];
	tables.map((x) => (x !== null ? edges.push(x) : null));
	if (recursiveNodes > 1 && recursiveNodes <= 5) {
		for (let i = 0; i < recursiveNodes - 1; i++) {
			recursiveMethodTable(nodes, edges, app, nodesToShow, getName);
		}
	}
	if (classes.length > 1) {
		nodes[0].data.logo = nonExclusiveTable;
	}
	return [edges, nodes, { parentClasses: classes }];
};
