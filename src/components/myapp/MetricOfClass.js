import {
	colors,
	Container,
	Text,
	SmallSelectedClassIcon,
	SmallEncapsulatedIcon,
	SmallNonEncapsulatedIcon,
	SmallNonEncapsulatedTableIcon,
	SmallEncapsulatedTableIcon,
	SmallInterfaceIcon,
	CircleMetrics,
} from 'design-kit-codojo';
import { ToolTipMetrics } from './ToolTipMetrics';
import { useState } from 'react';

export const MetricOfClass = ({ metric, classe }) => {
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
	return (
		<Container className='container-metrics' bg={colors.background.four}>
			<Text
				variant='one'
				color={tooltip.father ? colors.primary.two : colors.grey.nine}
				fontWeight={500}
				ml={15}
				mt={15}
				title={classe}
				className='d-flex cursor myclass'
				onClick={() => handleTooltipClick('father')}
			>
				<SmallSelectedClassIcon />
				{metric.className.length > 16
					? `${metric.className.substring(0, 16)}...`
					: metric.className}{' '}
				called by&nbsp;
				<CircleMetrics
					variant='primary'
					className='d-flex justify-content-center aling-items-center'
				>
					<span style={{ fontSize: '8px', marginTop: '-4px' }}>
						{metric.fathers.length}
					</span>
				</CircleMetrics>
				&nbsp;classes
			</Text>
			{tooltip.father ? (
				<ToolTipMetrics classes={metric.fathers}>
					The below classes reference {metric.className} and will need to be
					refactored if this class moves to a microservice
				</ToolTipMetrics>
			) : null}
			<Text variant='two' color={colors.grey.six} ml={15} mt={26}>
				Utilizes{' '}
				{metric.nonEcxlusiveClasses.length +
					metric.exclusiveTables.length +
					metric.nonEcxlusiveTables.length +
					metric.interfaces.length +
					metric.exlusiveClasses.length}{' '}
				resources ({metric.showNodes - 1} shown)
			</Text>
			<Text
				variant='three'
				color={tooltip.interfaces ? colors.primary.two : colors.grey.nine}
				ml={16}
				mt='4px'
				className='cursor'
				onClick={() => handleTooltipClick('interfaces')}
			>
				<SmallInterfaceIcon /> {metric.interfaces.length}
				{metric.interfaces.length === 1 ? ' interface' : ' interfaces'}
			</Text>
			{tooltip.interfaces ? (
				<ToolTipMetrics classes={metric.interfaces}>
					Is only used by this proposed microservice. No refactoring is
					required.
				</ToolTipMetrics>
			) : null}
			<Text
				variant='three'
				color={tooltip.exlusiveClasses ? colors.primary.two : colors.grey.nine}
				ml={15}
				mt={-11}
				className='cursor'
				onClick={() => handleTooltipClick('exlusiveClasses')}
			>
				<SmallEncapsulatedIcon /> {metric.exlusiveClasses.length}
				{metric.exlusiveClasses.length === 1
					? ' exclusive class'
					: ' exclusive classes'}
			</Text>
			{tooltip.exlusiveClasses ? (
				<ToolTipMetrics classes={metric.exlusiveClasses}>
					Is only used by this proposed microservice. No refactoring is
					required. {metric.className} can be eliminated from the monolith when
					it is migrated to a microservice.
				</ToolTipMetrics>
			) : null}
			<Text
				variant='three'
				color={
					tooltip.nonEcxlusiveClasses ? colors.primary.two : colors.grey.nine
				}
				ml={15}
				mt={-11}
				className='cursor'
				onClick={() => handleTooltipClick('nonEcxlusiveClasses')}
			>
				<SmallNonEncapsulatedIcon /> {metric.nonEcxlusiveClasses.length}
				{metric.nonEcxlusiveClasses.length === 1
					? ' non-exclusive class '
					: ' non-exclusive classes'}
			</Text>
			{tooltip.nonEcxlusiveClasses ? (
				<ToolTipMetrics classes={metric.nonEcxlusiveClasses}>
					A non-exclusive class has relationships with other classes outside
					this proposed microservice. The below classes must be refactored
					before {metric.className} is migrated to a microservice and eliminated
					from the monolith.
				</ToolTipMetrics>
			) : null}
			<Text
				variant='three'
				color={tooltip.exclusiveTables ? colors.primary.two : colors.grey.nine}
				ml={17}
				mt={-11}
				className='cursor'
				onClick={() => handleTooltipClick('exclusiveTables')}
			>
				<SmallEncapsulatedTableIcon /> {metric.exclusiveTables.length}
				{metric.exclusiveTables.length === 1
					? ' exclusive datastore '
					: ' exclusive datastores '}
			</Text>
			{tooltip.exclusiveTables ? (
				<ToolTipMetrics classes={metric.exclusiveTables}>
					An exclusive datastore is only used by this proposed microservice. No
					refactoring is required.
				</ToolTipMetrics>
			) : null}
			<Text
				variant='three'
				color={
					tooltip.nonEcxlusiveTables ? colors.primary.two : colors.grey.nine
				}
				ml={17}
				mt={-11}
				className='cursor'
				onClick={() => handleTooltipClick('nonEcxlusiveTables')}
			>
				<SmallNonEncapsulatedTableIcon /> {metric.nonEcxlusiveTables.length}
				{metric.nonEcxlusiveTables.length === 1
					? ' non-exclusive datastore '
					: ' non-exclusive datastores '}
			</Text>
			{tooltip.nonEcxlusiveTables ? (
				<ToolTipMetrics classes={metric.nonEcxlusiveTables}>
					A non-exclusive datastore is utilized with other classes that are not
					required for this microservice. Consider refactoring the below classes
					so that when {metric.className} is a microservice there would be only
					one service communicating with this datastore.
				</ToolTipMetrics>
			) : null}
		</Container>
	);
};
