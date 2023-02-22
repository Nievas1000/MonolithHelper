import { colors } from 'design-kit-codojo';
import { useSelector } from 'react-redux';
import { recursiveMethod } from '../utils/recursiveMethod';
import interfaceIcon from '../utils/graphIcons/Interface.svg';
import databaseIcon from '../utils/graphIcons/Database.svg';

// Con este hook le creamos los nodes y edges mediante las relaciones extraidas del json de la app seleccionada
const useNodes = (recursiveNodes = 0) => {
	const state = useSelector((state) => state);
	const app = state.selectedApp;
	const classe = state.selectedClass;
	let pos = -150;
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
	const relationsExtends = app.relationsExtends.map((node) => {
		if (classe !== node.classe) {
			return null;
		}
		nodes.push({
			data: {
				id: node.extend.name,
				selectColor: colors.background.two,
				selectBorder: colors.primary.two,
				extend: true,
			},
			position: {
				x: pos,
				y: Math.random() * (350 - 450) + 350,
			},
		});
		pos += 110;
		return {
			data: {
				id: `${node.classe}-${node.extend.name}`,
				source: node.classe,
				target: node.extend.name,
			},
		};
	});
	const relationsImplements = app.relationsImplement.map((node) => {
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
	const usedClasses = app.usedClasses.flatMap((node) =>
		node.use.map((child) => {
			if (classe !== node.classe) {
				return null;
			}
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
		})
	);
	const tables = app.tables.map((node) => {
		if (classe !== node.classe) {
			return null;
		}
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
	const edges = [];
	relationsImplements.map((x) => (x !== null ? edges.push(x) : null));
	relationsExtends.map((x) => (x !== null ? edges.push(x) : null));
	usedClasses.map((x) => (x !== null ? edges.push(x) : null));
	tables.map((x) => (x !== null ? edges.push(x) : null));

	if (recursiveNodes > 1 && recursiveNodes <= 5) {
		for (let i = 0; i < recursiveNodes - 1; i++) {
			recursiveMethod(nodes, pos, edges, app);
		}
	}
	return [edges, nodes];
};

export default useNodes;
