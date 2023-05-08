import {
	Container,
	CrossIconWhite,
	DownloadIconGray,
	InfoIcon,
	Text,
	Title,
	colors,
} from 'design-kit-codojo';
import { useEffect, useState } from 'react';
import { CSVLink } from 'react-csv';
import { useSelector } from 'react-redux';
import { useDataDatastores } from '../hooks/useDataDatastore';

export const DatastoresTable = ({ setUrl }) => {
	const [showTooltip, setShowTooltip] = useState(false);
	const [data] = useDataDatastores();
	const app = useSelector((state) => state.selectedApp);

	const header = [
		{ label: 'Datastore', key: 'datastore' },
		{ label: 'Classes Referencing Datastore', key: 'usedClasses.length' },
		{ label: 'Apps using datastore', key: 'usedApps' },
	];
	useEffect(() => {
		document.title = 'Datastores | Taffi';
		history.pushState(null, '', 'datastores');
	}, []);
	return (
		<Container
			className='d-flex justify-content-center'
			bg={colors.background.one}
		>
			<Container
				bg={colors.background.two}
				className='container-datastores-table'
				mt={44}
				ml={250}
			>
				<Container
					className='close-api-table cursor'
					mt={15}
					mr={15}
					onClick={() => setUrl('my-app')}
				>
					<CrossIconWhite />
				</Container>
				<Title
					variant='five'
					className='d-flex justify-content-center'
					color={colors.grey.ten}
					mt={46}
					mb={58}
				>
					Datastores&nbsp;
					<CSVLink
						data={data}
						headers={header}
						filename={`${app.applicationName}_Datastores`}
						target='_blank'
					>
						<DownloadIconGray />
					</CSVLink>
				</Title>
				<div className='outer-wrapper'>
					<div className='table-wrapper'>
						<table className='table-apis'>
							<thead>
								<tr>
									<th style={{ width: '180px' }}>Datastore</th>
									<th className='d-flex justify-content-center'>
										{showTooltip ? (
											<Container
												bg={colors.background.eight}
												className='tooltip-table'
												mt='-80px'
												ml={10}
											>
												<Text variant='three' color={colors.grey.seven} mt={12}>
													The sum of classes referencing the datastore from all
													known applications
												</Text>
											</Container>
										) : null}
										Classes Referencing Datastore&nbsp;
										<div
											onMouseEnter={() => setShowTooltip(true)}
											onMouseLeave={() => setShowTooltip(false)}
											className='cursor'
										>
											<InfoIcon />
										</div>{' '}
									</th>
									<th>Apps using datastore</th>
								</tr>
							</thead>
							<tbody>
								{data.map((data) => {
									return (
										<tr key={data.datastore}>
											<td>{data.datastore}</td>
											<td>{data.usedClasses.length}</td>
											<td>{data.usedApps}</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				</div>
			</Container>
		</Container>
	);
};
