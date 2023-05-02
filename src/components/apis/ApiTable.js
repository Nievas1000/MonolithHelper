import {
	Container,
	CrossIconWhite,
	/* DownloadIconGray, */
	InfoIcon,
	Text,
	Title,
	colors,
} from 'design-kit-codojo';
import { useDataApis } from '../../hooks/useDataApis';
import { useEffect, useState } from 'react';

export const ApiTable = ({ setApi }) => {
	const [data] = useDataApis();
	const [showTooltip, setShowTooltip] = useState(false);
	useEffect(() => {
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
					onClick={() => setApi(false)}
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
					{/* <DownloadIconGray /> */}
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
												{api.dataExclusive === -1
													? '-'
													: `${Math.ceil(api.dataExclusive)}%`}
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
