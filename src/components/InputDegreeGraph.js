import { LessDegreeIcon, PlusDegreeIcon, InputDegree } from 'design-kit-codojo';
import { useRef } from 'react';

const InputDegreeGraph = ({ degree, setDegree }) => {
	const ref = useRef();
	console.log(ref);
	return (
		<div>
			<div className='d-flex justify-content-center container-degree'>
				<div className='input-degree'>
					<span className='less'>
						<LessDegreeIcon />
					</span>
					<InputDegree
						type='range'
						min='1'
						max='5'
						value={degree}
						onChange={(e) => setDegree(e.target.value)}
						ref={ref}
					/>
					<span className='plus'>
						<PlusDegreeIcon />
					</span>
				</div>
				<ul className='range-labels'>
					<li>|</li>
					<li>|</li>
					<li>|</li>
					<li>|</li>
					<li>|</li>
				</ul>
			</div>
			<span className='level-degree d-flex justify-content-center mt-3'>
				{degree} st Degree
			</span>
		</div>
	);
};

export default InputDegreeGraph;
