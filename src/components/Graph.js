import useCytoscope from '../hooks/useCytoscope';
import { useState } from 'react';

const Graph = () => {
	const [degree, setDegree] = useState(0);
	useCytoscope(document.getElementById('cy'), degree);
	console.log(degree);
	return (
		<div>
			<button onClick={() => setDegree(degree + 1)}>More</button>
			<button onClick={() => setDegree(degree - 1)}>Less</button>
			<div id='cy'></div>
		</div>
	);
};

export default Graph;
