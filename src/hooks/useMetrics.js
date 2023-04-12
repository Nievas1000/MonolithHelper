import { useState } from 'react';

export const useMetrics = () => {
	const [tooltip, setTooltip] = useState({
		father: false,
		interfaces: false,
		exlusiveClasses: false,
		nonEcxlusiveClasses: false,
		exclusiveTables: false,
		nonEcxlusiveTables: false,
	});
	const handleTooltipClick = (tooltipName) => {
		setTooltip((prevTooltip) => {
			const newTooltip = {
				[tooltipName]: !prevTooltip[tooltipName],
			};
			Object.keys(prevTooltip).forEach((key) => {
				if (key !== tooltipName) {
					newTooltip[key] = false;
				}
			});
			return newTooltip;
		});
	};

	return [tooltip, handleTooltipClick];
};
