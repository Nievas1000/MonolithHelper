/* import cytoscape from 'cytoscape';
import compoundDragAndDrop from 'cytoscape-compound-drag-and-drop';
import { colors } from 'design-kit-codojo';
cytoscape.use(compoundDragAndDrop); */
/* eslint-disable */

import { colors } from 'design-kit-codojo';

// Aqui esta toda la configuracion necesaria para que el usuario puede crear un cuadro y poder juntar los nodos
export const compoundDragAndDropConfig = (cy, handleClass, metric) => {
	cy.style().selector('.parent-node').style({
		'background-color': colors.background.one,
		label: metric.fathers.length,
		'text-valign': 'center',
		'text-halign': 'center',
		'text-wrap': 'wrap',
		'text-max-width': '80px',
		'font-size': '12px',
		'border-style': 'solid',
		'border-width': '2px',
		'border-color': colors.grey.six,
		color: colors.grey.six,
	});
	cy.add({
		group: 'nodes',
		data: {
			id: metric.fathers.length,
			data: true,
		},
		classes: 'parent-node',
		position: {
			x:
				cy.nodes().length > 1
					? cy.nodes()[1].position().x + 20
					: cy.nodes()[0].position().x + 20,
			y:
				cy.nodes().length > 1
					? cy.nodes()[1].position().y + 50
					: cy.nodes()[0].position().y + 50,
		},
	});

	cy.add({
		group: 'edges',
		data: {
			id: 'arista1',
			source: metric.fathers.length,
			target: metric.className,
		},
	});
	cy.nodes().on('mouseover', function (event) {
		const node = event.target;
		if (node.data().classe || node.data().interface) {
			node.style('label', node.data().path);
		}
	});
	cy.nodes().on('mouseout', function (event) {
		const node = event.target;
		if (node.data().classe || node.data().interface) {
			node.style('label', '');
		}
	});
	cy.on('dblclick', 'node', function (event) {
		const node = event.target.data();
		if (node.classe) {
			handleClass(node);
		}
	});
	/* const options = {
		grabbedNode: (node) => true,
		dropTarget: (dropTarget, grabbedNode) => true,
		dropSibling: (dropSibling, grabbedNode) => true,
		newParentNode: (grabbedNode, dropSibling) => ({}),
		boundingBoxOptions: {
			includeOverlays: false,
			includeLabels: true,
		},
		overThreshold: 10,
		outThreshold: 10,
	};
	const cdnd = cy.compoundDragAndDrop(options);

	const isParentOfOneChild = function (node) {
		return node.isParent() && node.children().length === 1;
	};

	const removeParent = function (parent) {
		parent.children().move({ parent: null });
		parent.remove();
	};

	const removeParentsOfOneChild = function () {
		cy.nodes().filter(isParentOfOneChild).forEach(removeParent);
	};
	cy.on('remove', function (event) {
		removeParentsOfOneChild();
	});

	cy.on('cdndout', function (event, dropTarget, dropSibling) {
		if (isParentOfOneChild(dropTarget)) {
			removeParent(dropTarget);
		}
	});
	cy.unbind('click');
	cy.bind('click', 'edge', function (edge) {
		if (edge.target.style().lineColor === 'rgb(18,176,108)') {
			edge.target.animate({
				style: {
					lineColor: colors.grey.five,
				},
			});
		} else {
			edge.target.animate({
				style: {
					lineColor: colors.primary.one,
				},
			});
		}
	}); */
	/* cy.on('cdnddrop', function (event, dropTarget, dropSibling) {
		dropTarget.children().map((e) => {
			const index = parents.findIndex(
				(node) => node.parent === dropTarget.data().id
			);
			if (index === -1) {
				parents.push({
					parent: dropTarget.data().id,
					childrens: [e.data().id],
				});
			} else {
				if (!parents[index].childrens.includes(e.data().id)) {
					parents[index].childrens.push(e.data().id);
				}
			}
		});
		console.log(parents);
	}); */
};

export default compoundDragAndDropConfig;
