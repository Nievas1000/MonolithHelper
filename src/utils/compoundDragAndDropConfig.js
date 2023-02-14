import cytoscape from 'cytoscape';
import compoundDragAndDrop from 'cytoscape-compound-drag-and-drop';

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
	cy.compoundDragAndDrop(options);

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

	cy.on('cdndout', function (event, dropTarget) {
		if (isParentOfOneChild(dropTarget)) {
			removeParent(dropTarget);
		}
	});
	cy.on('remove', function (event) {
		removeParentsOfOneChild();
	});
};

export default compoundDragAndDropConfig;
