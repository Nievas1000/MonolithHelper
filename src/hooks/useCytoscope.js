import cytoscape from 'cytoscape';
import { colors } from 'design-kit-codojo';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import useNodes from './useNodes';
import compoundDragAndDropConfig from '../utils/compoundDragAndDropConfig';

const useCytoscope = (container, degree) => {
	const state = useSelector((state) => state);
	const app = state.selectedApp;
	const classe = state.selectedClass;
	const [edges, nodes] = useNodes(degree);
	useEffect(() => {
		if (app) {
			if (container) {
				const cy = cytoscape({
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
								label: 'data(selectName)',
								color: colors.grey.six,
								'text-margin-x': '80px',
							},
						},
						{
							selector: ':parent',
							style: {
								'background-color': '#1E1E1E',
								'border-color': 'grey',
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
	}, [classe, app, nodes]);
	return [nodes];
};

export default useCytoscope;
