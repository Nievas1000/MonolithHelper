import cytoscape from 'cytoscape';
import { colors } from 'design-kit-codojo';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import useNodes from './useNodes';
import compoundDragAndDropConfig from '../utils/compoundDragAndDropConfig';
import fcose from 'cytoscape-fcose';
import { useTablesNodes } from './useTablesNodes';

cytoscape.use(fcose);

// Hook para darle forma al grafico, aqui definimos los label, el estilo del node, el estilo de los edges, es estilo del cuadrado que puede crear el usuario
const getName = (name) => {
	const cadena = name.split('.');
	const className = cadena[cadena.length - 1];

	return className;
};

const useCytoscope = (container, degree, handleClass) => {
	const state = useSelector((state) => state);
	const app = state.selectedApp;
	const classe = state.selectedClass;
	const [edges, nodes, metric] = useNodes(degree, getName);
	const [edgesTables, nodesTables, metricTables] = useTablesNodes(
		degree,
		getName
	);
	let cy;
	if (!app.tablesNames[0].includes(classe)) {
		useEffect(() => {
			if (app) {
				container = document.getElementById('cy');
				if (container) {
					cy = cytoscape({
						container,
						elements: [...nodes, ...edges],
						maxZoom: 1.5,
						layout: {
							name: 'fcose',
							idealEdgeLength: 120,
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
									'background-color': '#131514',
									label: 'data(id)',
									color: colors.grey.ten,
									'text-margin-x': '10px',
									'text-margin-y': '40px',
									'font-size': 10,
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
									'curve-style': 'bezier',
								},
							},
							{
								selector: 'node[logoapi]',
								style: {
									'background-image': 'data(logoapi)',
								},
							},
						],
					});
					compoundDragAndDropConfig(cy, handleClass, metric);
				}
			}
		}, [classe, app, nodes]);
		return [metric, classe, false];
	} else {
		useEffect(() => {
			if (app) {
				container = document.getElementById('cy');
				if (container) {
					cy = cytoscape({
						container,
						elements: [...nodesTables, ...edgesTables],
						maxZoom: 1.5,
						layout: {
							name: 'fcose',
							idealEdgeLength: 120,
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
									'background-color': '#131514',
									label: 'data(id)',
									color: colors.grey.ten,
									'text-margin-x': '10px',
									'text-margin-y': '40px',
									'font-size': 10,
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
									'curve-style': 'bezier',
								},
							},
						],
					});
					compoundDragAndDropConfig(cy, handleClass, metric, true);
				}
			}
		}, [classe, app, nodes]);
		return [metricTables, classe, true];
	}
};

export default useCytoscope;
