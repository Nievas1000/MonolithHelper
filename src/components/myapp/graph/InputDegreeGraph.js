import {
	LessDegreeIcon,
	PlusDegreeIcon,
	InputDegree,
	Container,
	colors,
} from 'design-kit-codojo';

const InputDegreeGraph = ({ degree, setDegree }) => {
	const increaseDegree = () => {
		if (degree < 5) {
			setDegree(degree + 1);
		}
	};

	const decreaseDegree = () => {
		if (degree > 1) {
			setDegree(degree - 1);
		}
	};
	return (
		<Container bg={colors.background.one}>
			<div className='d-flex justify-content-center container-degree'>
				<div className='input-degree'>
					<span className='less cursor' onClick={decreaseDegree}>
						<LessDegreeIcon />
					</span>
					<InputDegree
						type='range'
						min='1'
						max='5'
						className='line-degree'
						value={degree}
						onChange={(e) => setDegree(Number(e.target.value))}
					/>
					<span className='plus cursor' onClick={increaseDegree}>
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
				{degree > 1 ? `${degree} degrees` : `${degree} degree`}
			</span>
		</Container>
	);
};

export default InputDegreeGraph;
