import { colors } from 'design-kit-codojo';
import { useSelector } from 'react-redux';

// Con este hook le creamos los nodes y edges mediante las relaciones extraidas del json de la app seleccionada
const useNodes = () => {
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
							selectName: classe,
							selectColor: colors.primary.two,
							selectBorder: colors.grey.ten,
						},
						position: { x: 10.66666666666671, y: 308.00000000000006 },
					},
			  ];
	const relationsExtends = app.relationsExtends.map((node) => {
		if (classe !== node.classe) {
			return null;
		}
		nodes.push({
			data: {
				id: node.extend,
				selectName: '',
				selectColor: colors.background.two,
				selectBorder: colors.primary.two,
			},
			position: {
				x: pos,
				y: Math.random() * (200 - 300) + 200,
			},
		});
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
		if (classe !== node.classe) {
			return null;
		}
		nodes.push({
			data: {
				id: node.implement,
				selectName: '',
				selectColor: colors.background.two,
				selectBorder: colors.primary.two,
			},
			position: {
				x: pos,
				y: Math.random() * (200 - 300) + 200,
			},
		});
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
			if (classe !== node.classe) {
				return null;
			}
			nodes.push({
				data: {
					id: child,
					selectName: '',
					selectColor: colors.background.two,
					selectBorder: colors.primary.two,
				},
				position: {
					x: pos,
					y: Math.random() * (200 - 300) + 200,
				},
			});
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
	const edges = [];
	relationsImplements.map((x) => (x !== null ? edges.push(x) : null));
	relationsExtends.map((x) => (x !== null ? edges.push(x) : null));
	usedClasses.map((x) => (x !== null ? edges.push(x) : null));
	return [edges, nodes];
};

export default useNodes;
