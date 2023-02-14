import useCytoscope from '../hooks/useCytoscope';
import { useState } from 'react';
import InputDegreeGraph from './InputDegreeGraph';

const Graph = () => {
	const [degree, setDegree] = useState(0);
	useCytoscope(document.getElementById('cy'), degree);
	return (
		<div>
			<div id='cy'></div>
			<div>
				<InputDegreeGraph degree={degree} setDegree={setDegree} />
			</div>
		</div>
	);
};

export default Graph;
