import cytoscape from 'cytoscape';
import { colors } from 'design-kit-codojo';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import useNodes from './useNodes';
import compoundDragAndDropConfig from '../utils/compoundDragAndDropConfig';

// Hook para darle forma al grafico, aqui definimos los label, el estilo del node, el estilo de los edges, es estilo del cuadrado que puede crear el usuario
const useCytoscope = (container, degree) => {
	const state = useSelector((state) => state);
	const app = state.selectedApp;
	console.log(app);
	const classe = state.selectedClass;
	const [edges, nodes] = useNodes(degree);
	let cy;
	useEffect(() => {
		if (app) {
			if (container) {
				cy = cytoscape({
					container,
					elements: [...nodes, ...edges],
					maxZoom: 1.5,
					layout: {
						name: 'preset',
						animate: false,
					},

					style: [
						{
							selector: 'node[selectColor]',
							style: {
								'background-color': 'data(selectColor)',
								'border-style': 'solid',
								'border-width': '2px',
								'border-color': 'data(selectBorder)',
								label: 'data(id)',
								color: colors.grey.ten,
								'text-margin-x': '10px',
								'text-margin-y': '40px',
								'font-size': 10,
							},
						},
						{
							selector: 'node[logo]',
							style: {
								'background-image': 'data(logo)',
								'border-width': '0px',
								'background-color': '#1E1E1E',
								label: 'data(id)',
								color: colors.grey.ten,
								'text-margin-x': '10px',
								'text-margin-y': '40px',
								'font-size': 10,
							},
						},
						{
							selector: 'node[extend]',
							style: {
								'border-style': 'dashed',
							},
						},
						{
							selector: ':parent',
							style: {
								'background-color': '#1E1E1E',
								'border-color': 'grey',
								width: '20px',
								label: '',
							},
						},
						{
							selector: 'edge',
							style: {
								width: 3,
								'line-color': colors.grey.five,
								'target-arrow-shape': 'triangle',
								'curve-style': 'unbundled-bezier',
							},
						},
					],
				});
				compoundDragAndDropConfig(cy);
			}
		}
		console.log(cy);
	}, [classe, app, nodes]);
};

export default useCytoscope;
