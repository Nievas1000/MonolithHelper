import useCytoscope from '../../../hooks/useCytoscope';
import { useState } from 'react';
import InputDegreeGraph from './InputDegreeGraph';
import { useDispatch } from 'react-redux';
import { MetricOfClass } from '../metrics/MetricOfClass';
import { Container } from 'design-kit-codojo';

const Graph = () => {
	const [degree, setDegree] = useState(1);
	const dispatch = useDispatch();

	const handleClass = (node) => {
		dispatch({
			type: 'SELECT_CLASS',
			payload: node.path,
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
					<MetricOfClass metric={metric} classe={classe} dispatch={dispatch} />
				</div>
			</div>
			<div className='degree'>
				<InputDegreeGraph degree={degree} setDegree={setDegree} />
			</div>
			<Container
				className='d-flex justify-content-center metric-mobile'
				mt={70}
				mb={35}
			>
				<MetricOfClass metric={metric} classe={classe} dispatch={dispatch} />
			</Container>
		</div>
	);
};

export default Graph;
