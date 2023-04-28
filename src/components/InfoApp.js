import {
	colors,
	ContainerInfoAddApplication,
	Subtitle,
	Text,
	DownloadIcon,
} from 'design-kit-codojo';

import { useCallback } from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import archivo1 from '../app/SendToTaffi.jar'; // Archivo 1 a comprimir
import archivo2 from '../app/SendTaffi.sh';
import archivo3 from '../app/SendTaffi.bat';
import archivo4 from '../app/SendToTaffi.config.properties';

/**
 * @param {string}
 * @param {string}
 * @param {function}
 */

// las funciones de javascript en nodejs son asincronicas
// por lo tanto lo que se quiera hacer debe hacerse dentro de la funcion que maneja el evento
// si uno declara una variable arriba de la funcion, la manipula dentro y la quiere usar
// despues afuera, se corre el riezgo de que nunca se realice la manipulacion.

function leerarchivo(file) {
	return new Promise((resolve, reject) => {
		const archivo = new XMLHttpRequest();
		archivo.open('GET', file, true);
		archivo.onreadystatechange = function () {
			if (archivo.readyState === 4) {
				if (archivo.status === 200 || archivo.status === 0) {
					const texto = archivo.responseText;
					resolve(texto + 'holaa');
				} else {
					reject(
						new Error(`Error al leer el archivo ${file}: ${archivo.statusText}`)
					);
				}
			}
		};
		archivo.send(null);
	});
}
export default function InfoApp() {
	const onClick = useCallback(async () => {
		const zip = new JSZip();
		const text = await leerarchivo(archivo4);
		const key = 'USER.APPLICATION.KEY ';
		const newValue = localStorage.getItem('userAppKey');
		const regex = new RegExp(`^${key}.+$`, 'm');
		const newText = text.replace(regex, `${key + '= '}${newValue}`);

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

			carpetaArchivos.file(`${nombre}.${types}`, imgBlob, { blob: true });
		});

		const blob = new Blob([newText], { type: 'text/plain;charset=utf-8' });
		carpetaArchivos.file('SendToTaffi.config.properties', blob);

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
					<DownloadIcon />
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
