import { Container, Text, colors, DownloadIconGray } from 'design-kit-codojo';
import { CSVLink } from 'react-csv';
import { useSelector } from 'react-redux';

export const ToolTipMetrics = (props) => {
	const app = useSelector((state) => state.selectedApp);
	const handleClass = (classe) => {
		if (props.execute) {
			props.dispatch({
				type: 'SELECT_CLASS',
				payload: classe,
			});
		}
	};
	const headersClass = [
		{ label: 'Package', key: 'path' },
		{ label: 'Class', key: 'className' },
	];
	const headersTables = [{ label: 'Datastore', key: 'path' }];
	return (
		<div className='d-flex justify-content-center mb-4'>
			<Container
				className='container-classes-metric'
				bg={colors.background.eight}
			>
				<div
					className='d-flex justify-content-center align-items-center'
					style={{ position: 'relative' }}
				>
					<Text variant='three' ml={15} mt={11} color={colors.grey.nine}>
						{props.children}
					</Text>
					{props.download && props.classes.length > 0 && (
						<CSVLink
							data={props.classes}
							headers={props.classe ? headersClass : headersTables}
							filename={
								props.classe
									? `${app.applicationName}_${props.className}_Non_Exclusive_Classes`
									: `${app.applicationName}_${props.className}_Non_Exclusive_Datastores`
							}
						>
							<Container className='download-metric cursor' mr='6px'>
								<DownloadIconGray />
							</Container>
						</CSVLink>
					)}
				</div>
				<Container className='fathers-metric'>
					{props.classes.map((father, index) => {
						return (
							<Container
								key={father.path}
								className='container-father d-flex cursor'
								onClick={() => handleClass(father.path)}
							>
								<Text
									variant='three'
									className='fathers metrics-items'
									color={colors.grey.nine}
									ml={20}
									mb='5px'
								>
									{index + 1}. {father.path}
								</Text>
							</Container>
						);
					})}
				</Container>
			</Container>
		</div>
	);
};
