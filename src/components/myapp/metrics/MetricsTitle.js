import { SmallSelectedClassIcon, Text, colors } from 'design-kit-codojo';

export const MetricsTitle = ({
	metric,
	classe,
	tooltip,
	handleTooltipClick,
}) => {
	return (
		<div>
			{metric.className.length <= 20 ? (
				<Text
					variant='one'
					color={tooltip.father ? colors.primary.two : colors.grey.nine}
					fontWeight={500}
					ml={15}
					mt={15}
					title={classe}
					className={
						metric.fathers.length <= 0
							? 'd-flex cursor myclass'
							: 'd-flex cursor myclass '
					}
					onClick={
						metric.fathers.length > 0
							? () => handleTooltipClick('father')
							: null
					}
				>
					<SmallSelectedClassIcon />
					{metric.className} called by {metric.fathers.length} classes
				</Text>
			) : (
				<Text
					variant='one'
					color={tooltip.father ? colors.primary.two : colors.grey.nine}
					fontWeight={500}
					ml={15}
					mt={15}
					title={classe}
					className='d-flex cursor myclass'
					onClick={
						metric.fathers.length > 0
							? () => handleTooltipClick('father')
							: null
					}
				>
					<SmallSelectedClassIcon />
					{metric.className.length > 30
						? `${metric.className.substring(0, 30)}...`
						: metric.className}
					<br />
					...is called by {metric.fathers.length} classes
				</Text>
			)}
		</div>
	);
};
