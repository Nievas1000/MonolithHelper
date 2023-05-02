import {
	colors,
	ContainerInfoAddApplication,
	Subtitle,
	Text,
	DownloadIconGreen,
} from 'design-kit-codojo';

import { useCallback } from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import archivo1 from '../app/SendToTaffi.jar'; // Archivo 1 a comprimir
import archivo2 from '../app/SendTaffi.sh';
import archivo3 from '../app/SendTaffi.bat';
import archivo4 from '../app/SendToTaffi.config.properties';

export default function InfoApp() {
	const onClick = useCallback(async () => {
		const zip = new JSZip();

		// Se crea la carpeta donde se guardaran los archivos
		const carpetaArchivos = zip.folder('SendAppDataToTaffi');

		const recorrerArchivos = await Promise.all(
			[archivo1, archivo2, archivo3, archivo4].map(async (imgSrc, index) => {
				const res = await fetch(imgSrc);

				return res.blob();
			})
		);

		let cont = 0;
		let types;
		let nombre;
		recorrerArchivos.forEach((imgBlob, index) => {
			cont = cont + 1;
			if (imgBlob.type === 'text/x-sh') {
				types = 'sh';
				nombre = 'SendTaffi';
			}
			if (imgBlob.type === 'application/x-msdos-program') {
				types = 'bat';
				nombre = 'SendTaffi';
			}
			if (imgBlob.type === 'application/java-archive') {
				types = 'jar';
				nombre = 'SendToTaffi';
			}
			if (imgBlob.type === 'binary/octet-stream') {
				types = 'properties';
				nombre = 'SendToTaffi.config';
			}
			carpetaArchivos.file(`${nombre}.${types}`, imgBlob, { blob: true });
		});

		zip.generateAsync({ type: 'blob' }).then(function (content) {
			// Guarda el contenido recorrido en el archivo .zip
			saveAs(content, 'SendAppDataToTaffi.zip');
		});
	}, []);

	const userApplicationKey = localStorage.getItem('userAppKey');
	return (
		<div className='containerApp'>
			<ContainerInfoAddApplication>
				<Subtitle
					className='center'
					variant='two'
					color={colors.grey.six}
					mt={35}
					mb={0}
				>
					How to Add an Application
				</Subtitle>
				<Text variant='two' color={colors.grey.six} ml={5} mt={35} mb={-2}>
					{' '}
					1. Download the file
				</Text>
				<div className='download link'>
					<DownloadIconGreen />
					<Text
						variant='three'
						onClick={onClick}
						color={colors.primary.two}
						mt={3}
						ml={2}
					>
						SendAppDataToTaffi.zip
					</Text>
				</div>
				<br />
				<div className='containerUserKey'>
					<Text variant='two' color={colors.grey.four} ml={-4} mt={-4}>
						Your USER_APPLICATION_KEY = {userApplicationKey}
					</Text>
				</div>
				<br />
				<div className='containertext'>
					<Text variant='two' color={colors.grey.six} ml={4} mt={-3}>
						2. Unzip the contents to the top directory of the application
						project
						<br />
						Example: /apps/foo/bar/myJavaProject/{'{ zip file contents }'}
						<br />
						3. Open the{' '}
						<span className='importantwords'>SendToTaffi.properties</span> file,
						complete the instructions in the file, and save any edits. It is
						important to maintain the same filename. <br />
						4.Execute <span className='importantwords'>SendTaffi.sh</span> on a
						Linux system, or{' '}
						<span className='importantwords'>SendTaffi.bat </span> for Windows
						systems. This script will examine the uncompiled code for
						application and table relationships. Results will automatically be
						sent to Taffi.
					</Text>

					<Text variant='two' color={colors.grey.four} ml={4} mt={0}>
						{' '}
						The jar file will execute successfully with JAVA version 8 to 17.
						JAVA_HOME environment variable will need to be set for the file to
						execute successfully.{' '}
					</Text>
				</div>

				<Text className='center' variant='two' color={colors.grey.six} mt={0}>
					That was easy!
				</Text>
				<Text className='center' variant='two' color={colors.grey.six} mt={0}>
					But if it wasn’t, send us feedback and we’ll help within a few
					business hours.
				</Text>
			</ContainerInfoAddApplication>
		</div>
	);
}
