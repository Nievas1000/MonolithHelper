import { Form, Button } from 'react-bootstrap';
import { Auth } from 'aws-amplify';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ConfirmForgotPassword = ({ user, handleChange }) => {
	const [error, setError] = useState(null);
	const navigate = useNavigate();

	async function forgotPasswordSubmit(e) {
		e.preventDefault();
		try {
			const data = await Auth.forgotPasswordSubmit(
				user.email,
				user.authCode,
				user.password
			);
			if (data === 'SUCCESS') {
				navigate('/');
			}
		} catch (error) {
			setError(error.message);
		}
	}

	return (
		<div>
			<h5 className='mb-3'>
				Enter the code you recived and set a new password
			</h5>
			<Form>
				<Form.Group className='mb-3'>
					<Form.Label>Username or Email Address</Form.Label>
					<Form.Control
						name='email'
						type='text'
						value={user.email}
						placeholder='Enter email'
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group className='mb-3'>
					<Form.Label>Confirmation code</Form.Label>
					<Form.Control
						name='authCode'
						type='text'
						value={user.authCode}
						placeholder='Enter code'
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group className='mb-3' controlId='formBasicPassword'>
					<Form.Label>New Password</Form.Label>
					<Form.Control
						name='password'
						type='password'
						value={user.password}
						placeholder='Password'
						onChange={handleChange}
					/>
				</Form.Group>
				{error && (
					<div className='alert alert-danger d-flex mt-2' role='alert'>
						{error}
					</div>
				)}
				<Button variant='dark' type='submit' onClick={forgotPasswordSubmit}>
					Verify
				</Button>
			</Form>
		</div>
	);
};

export default ConfirmForgotPassword;
