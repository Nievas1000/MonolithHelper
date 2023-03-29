import useCytoscope from '../../hooks/useCytoscope';
import { useState } from 'react';
import InputDegreeGraph from './InputDegreeGraph';
import { MetricOfClass } from './MetricOfClass';
import { useDispatch } from 'react-redux';

const Graph = () => {
	const [degree, setDegree] = useState(1);
	const dispatch = useDispatch();
	const handleClass = (node) => {
		dispatch({
			type: 'SELECT_CLASS',
			payload: node,
		});
	};
	const [metric, classe] = useCytoscope(
		document.getElementById('cy'),
		degree,
		handleClass
	);

	return (
		<div>
			<div className='d-flex'>
				<div id='cy'></div>
				<div className='d-flex align-items-center metric'>
					<MetricOfClass metric={metric} classe={classe} />
				</div>
			</div>
			<div className='degree'>
				<InputDegreeGraph degree={degree} setDegree={setDegree} />
			</div>
		</div>
	);
};

export default Graph;
