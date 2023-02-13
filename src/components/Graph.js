import useCytoscope from '../hooks/useCytoscope';

const Graph = () => {
	useCytoscope(document.getElementById('cy'));
	return (
		<div>
			<button>Save</button>
			<div id='cy'></div>
		</div>
	);
};

export default Graph;
