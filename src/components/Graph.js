import useCytoscope from '../hooks/useCytoscope';
import { useState } from 'react';
import InputDegreeGraph from './InputDegreeGraph';
/* import { MetricOfClass } from './MetricOfClass'; */

const Graph = () => {
	const [degree, setDegree] = useState(0);
	const [metric /* classe */] = useCytoscope(
		document.getElementById('cy'),
		degree
	);
	console.log(metric);
	return (
		<div>
			<div className='d-flex'>
				<div id='cy'></div>
				{/* <div className='d-flex align-items-center metric'>
					<MetricOfClass metric={metric} classe={classe} />
				</div> */}
			</div>
			<div className='degree'>
				<InputDegreeGraph degree={degree} setDegree={setDegree} />
			</div>
		</div>
	);
};

export default Graph;
