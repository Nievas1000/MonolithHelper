import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Auth, Hub } from 'aws-amplify';

import { useNavigate } from 'react-router-dom';

const ConfirmSignUp = ({ user, handleChange }) => {
	const [error, setError] = useState(null);
	const navigate = useNavigate();

	async function confirmSignUp(e) {
		e.preventDefault();
		try {
			await Auth.confirmSignUp(user.email, user.authCode);
			Hub.listen('auth', ({ payload }) => {
				const { event } = payload;
				if (event === 'autoSignIn') {
					navigate('/');
				} else if (event === 'autoSignIn_failure') {
					console.log('El codigo ingresado es erroneo');
				}
			});
		} catch (err) {
			setError(err.message);
		}
	}

	return (
		<div>
			<Form>
				<h5 className='mb-3'>
					An activation code has been sent to your email.
				</h5>
				<Form.Group className='mb-3' controlId='formBasicEmail'>
					<Form.Label>Confirmation code</Form.Label>
					<Form.Control
						name='authCode'
						type='text'
						value={user.authCode}
						placeholder='Enter code'
						onChange={handleChange}
					/>
				</Form.Group>
				{error && (
					<div className='alert alert-danger d-flex mt-2' role='alert'>
						{error}
					</div>
				)}
				<Button variant='dark' type='submit' onClick={confirmSignUp}>
					Continue
				</Button>
			</Form>
		</div>
	);
};

export default ConfirmSignUp;
