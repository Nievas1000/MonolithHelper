import cytoscape from 'cytoscape';
import compoundDragAndDrop from 'cytoscape-compound-drag-and-drop';
import popper from 'cytoscape-popper';
import { colors } from 'design-kit-codojo';

cytoscape.use(popper);
cytoscape.use(compoundDragAndDrop);
/* eslint-disable */

// Aqui esta toda la configuracion necesaria para que el usuario puede crear un cuadro y poder juntar los nodos
export const compoundDragAndDropConfig = (cy) => {
	const options = {
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
	});
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
