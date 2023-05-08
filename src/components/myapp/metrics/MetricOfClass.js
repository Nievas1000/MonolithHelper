import {
	colors,
	Container,
	Text,
	SmallEncapsulatedIcon,
	SmallNonEncapsulatedIcon,
	SmallNonEncapsulatedTableIcon,
	SmallEncapsulatedTableIcon,
	SmallInterfaceIcon,
	SmallSelectedClassIcon,
} from 'design-kit-codojo';
import { ToolTipMetrics } from './ToolTipMetrics';
import { useMetrics } from '../../../hooks/useMetrics';
import { MetricsTitle } from './MetricsTitle';

export const MetricOfClass = ({ metric, classe, dispatch }) => {
	const [tooltip, handleTooltipClick] = useMetrics();
	return (
		<Container className='container-metrics' bg={colors.background.four}>
			<MetricsTitle
				metric={metric}
				classe={classe}
				tooltip={tooltip}
				handleTooltipClick={handleTooltipClick}
			/>
			{tooltip.father && metric.fathers.length > 0 ? (
				<ToolTipMetrics
					classes={metric.fathers}
					dispatch={dispatch}
					execute={true}
					className={metric.className}
					type={'Fathers_Classes'}
					classe={true}
				>
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
				className='cursor metrics-items'
				onClick={() => handleTooltipClick('interfaces')}
			>
				<SmallInterfaceIcon /> {metric.interfaces.length}
				{metric.interfaces.length === 1 ? ' interface' : ' interfaces'}
			</Text>
			{tooltip.interfaces ? (
				<ToolTipMetrics
					classes={metric.interfaces}
					className={metric.className}
					type={'Interfaces'}
					classe={true}
				>
					Interfaces needed if {metric.className} was moved to a microservice
				</ToolTipMetrics>
			) : null}
			<Text
				variant='three'
				color={tooltip.exlusiveClasses ? colors.primary.two : colors.grey.nine}
				ml={15}
				mt={-11}
				className='cursor metrics-items'
				onClick={() => handleTooltipClick('exlusiveClasses')}
			>
				<SmallEncapsulatedIcon /> {metric.exlusiveClasses.length}
				{metric.exlusiveClasses.length === 1
					? ' exclusive class'
					: ' exclusive classes'}
			</Text>
			{tooltip.exlusiveClasses ? (
				<ToolTipMetrics
					classes={metric.exlusiveClasses}
					dispatch={dispatch}
					execute={true}
					className={metric.className}
					type={'Exclusive_Classes'}
					classe={true}
				>
					These classes do not need to be refactored to move {metric.className}{' '}
					to a microservice
				</ToolTipMetrics>
			) : null}
			<Text
				variant='three'
				color={
					tooltip.nonEcxlusiveClasses ? colors.primary.two : colors.grey.nine
				}
				ml={15}
				mt={-11}
				className='cursor metrics-items'
				onClick={() => handleTooltipClick('nonEcxlusiveClasses')}
			>
				<SmallNonEncapsulatedIcon /> {metric.nonEcxlusiveClasses.length}
				{metric.nonEcxlusiveClasses.length === 1
					? ' non-exclusive class '
					: ' non-exclusive classes'}
			</Text>
			{tooltip.nonEcxlusiveClasses ? (
				<ToolTipMetrics
					classes={metric.nonEcxlusiveClasses}
					dispatch={dispatch}
					className={metric.className}
					execute={true}
					type={'Non_Exclusive_Classes'}
					classe={true}
				>
					These classes would need to be refactored to move {metric.className}{' '}
					to a microservice
				</ToolTipMetrics>
			) : null}
			<Text
				variant='three'
				color={tooltip.exclusiveTables ? colors.primary.two : colors.grey.nine}
				ml={17}
				mt={-11}
				className='cursor metrics-items'
				onClick={() => handleTooltipClick('exclusiveTables')}
			>
				<SmallEncapsulatedTableIcon /> {metric.exclusiveTables.length}
				{metric.exclusiveTables.length === 1
					? ' exclusive datastore '
					: ' exclusive datastores '}
			</Text>
			{tooltip.exclusiveTables ? (
				<ToolTipMetrics
					classes={metric.exclusiveTables}
					dispatch={dispatch}
					execute={true}
					className={metric.className}
					type={'Exclusive_Tables'}
				>
					If this class were to become a microservice, exclusive tables would be
					referenced by only the new microservice. The monolith would not need
					direct access to this data.
				</ToolTipMetrics>
			) : null}
			<Text
				variant='three'
				color={
					tooltip.nonEcxlusiveTables ? colors.primary.two : colors.grey.nine
				}
				ml={17}
				mt={-11}
				className='cursor metrics-items'
				onClick={() => handleTooltipClick('nonEcxlusiveTables')}
			>
				<SmallNonEncapsulatedTableIcon /> {metric.nonEcxlusiveTables.length}
				{metric.nonEcxlusiveTables.length === 1
					? ' non-exclusive datastore '
					: ' non-exclusive datastores '}
			</Text>
			{tooltip.nonEcxlusiveTables ? (
				<ToolTipMetrics
					classes={metric.nonEcxlusiveTables}
					dispatch={dispatch}
					className={metric.className}
					execute={true}
					type={'Non_Exclusive_Tables'}
				>
					If this class were to become a microservice, non-exclusive tables
					would be referenced by both the monolith and the new microservice.
				</ToolTipMetrics>
			) : null}
			<Container className='analysis-metrics' bg={colors.background.one}>
				<Text
					className='d-flex'
					variant='three'
					color={colors.grey.nine}
					mt={12}
					ml={9}
				>
					<span>
						<SmallSelectedClassIcon />
					</span>
					{metric.nonEcxlusiveClasses.length === 0 &&
						metric.nonEcxlusiveTables.length === 0 &&
						`${metric.className} can move to a microservice. `}
					{metric.nonEcxlusiveClasses.length === 0 &&
						metric.nonEcxlusiveTables.length > 0 &&
						`${metric.className} can be moved to a microservice but there will be multiple apps using the datastores.`}
					{metric.nonEcxlusiveClasses.length > 0 &&
						`${metric.className} cannot be moved to a microservice.`}
				</Text>
			</Container>
		</Container>
	);
};
