import {
	Container,
	CrossIconWhite,
	DownloadIconGray,
	InfoIcon,
	Text,
	Title,
	colors,
} from 'design-kit-codojo';
import { useDataApis } from '../../hooks/useDataApis';
import { useEffect, useState } from 'react';
import { CSVLink } from 'react-csv';
import { useSelector } from 'react-redux';

export const ApiTable = ({ setUrl }) => {
	const [data] = useDataApis();
	const [showTooltip, setShowTooltip] = useState(false);
	const app = useSelector((state) => state.selectedApp);
	const header = [
		{ label: 'Package', key: 'path' },
		{ label: 'ClassName', key: 'className' },
		{ label: '%Exclusive', key: 'dataExclusive' },
		{ label: 'Non-exlusive classes', key: 'NonExclusiveClasses.length' },
		{ label: 'Classes required', key: 'releatedClasses.length' },
		{ label: 'Non-exlusive datastore', key: 'NonExclusiveTables.length' },
		{ label: 'Datastores required', key: 'tables.length' },
	];

	useEffect(() => {
		document.title = 'Endpoints | Taffi';
		history.pushState(null, '', 'api');
	}, []);
	return (
		<Container
			className='d-flex justify-content-center'
			bg={colors.background.one}
		>
			<Container
				bg={colors.background.two}
				className='container-apis'
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
					Classes with Endpoints&nbsp;
					<CSVLink
						headers={header}
						data={data}
						filename={`${app.applicationName}_Endpoints`}
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
									<th>Package</th>
									<th>Class name</th>
									<th className='d-flex'>
										{showTooltip ? (
											<Container
												bg={colors.background.eight}
												className='tooltip-table'
												mt='-80px'
												ml='-80px'
											>
												<Text variant='three' color={colors.grey.seven} mt={12}>
													Non-exclusive / All classes & datastores
												</Text>
											</Container>
										) : null}
										%Exclusive&nbsp;
										<div
											onMouseEnter={() => setShowTooltip(true)}
											onMouseLeave={() => setShowTooltip(false)}
											className='cursor'
										>
											<InfoIcon />
										</div>{' '}
									</th>
									<th>Non-exclusive classes</th>
									<th>Classes required</th>
									<th>Non-exclusive datastore</th>
									<th>Datastores required</th>
								</tr>
							</thead>
							<tbody>
								{data.map((api) => {
									return (
										<tr key={api.className}>
											<td>{api.path}</td>
											<td>{api.className}</td>
											<td>
												{api.dataExclusive === '-'
													? '-'
													: `${api.dataExclusive}%`}
											</td>
											<td>{api.NonExclusiveClasses.length}</td>
											<td>{api.releatedClasses.length}</td>
											<td>{api.NonExclusiveTables.length}</td>
											<td>{api.tables.length}</td>
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
