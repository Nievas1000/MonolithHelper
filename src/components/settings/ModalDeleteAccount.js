import axios from 'axios';
import {
	Subtitle,
	ButtonText,
	colors,
	ContainerModalDeleteAccount,
	DeleteAccountIcon,
	CrossModalIcon,
	Button,
} from 'design-kit-codojo';
import { useState } from 'react';

const ModalDeleteAccount = ({ setIsOpen }) => {
	const userApplicationKey = localStorage.getItem('userAppKey');
	const [deleteAccount, setDelete] = useState();

	const deleteUser = async () => {
		if (deleteAccount === 'DELETE') {
			try {
				const response = await axios.post(
					`${process.env.REACT_APP_API_URL}/deleteUser`,
					{
						code: userApplicationKey,
					},
					{
						headers: {
							'x-api-key': process.env.REACT_APP_API_GATEWAY_TOKEN,
						},
					}
				);
				if (response.status === 200) {
					localStorage.clear();
					window.location.href = 'https://www.codojo.io/';
				}
			} catch (error) {
				console.log(error);
			}
		} else {
			console.log('Wrong word');
		}
	};

	const handleDelete = (e) => {
		setDelete(e.target.value);
	};

	return (
		<ContainerModalDeleteAccount variant='primary' className='modal-container'>
			<div className='container-cross-modal' onClick={() => setIsOpen(false)}>
				<CrossModalIcon />
			</div>
			<Subtitle variant='one' mt={32} ml={32} color={colors.grey.ten}>
				<DeleteAccountIcon /> Delete Account
			</Subtitle>
			<Subtitle variant='two' ml={32} color={colors.grey.six}>
				This action cannot be undone.
			</Subtitle>
			<Subtitle variant='two' color={colors.grey.five} mt={24} ml={32}>
				Type DELETE to continue.
			</Subtitle>
			<input
				type='text'
				className='input-delete-account'
				onChange={handleDelete}
			/>
			<Button
				mt={24}
				ml={24}
				variant='delete'
				className='container-delete-account-modal'
				onClick={deleteUser}
			>
				<ButtonText variant='one' mt={11}>
					Delete
				</ButtonText>
			</Button>
		</ContainerModalDeleteAccount>
	);
};

export default ModalDeleteAccount;
