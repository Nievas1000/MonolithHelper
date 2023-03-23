import { LessDegreeIcon, PlusDegreeIcon, InputDegree } from 'design-kit-codojo';

const InputDegreeGraph = ({ degree, setDegree }) => {
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
				{degree > 1 ? `${degree} Degrees` : `${degree} Degree`}
			</span>
		</div>
	);
};

export default InputDegreeGraph;
