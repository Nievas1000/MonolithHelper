import { Form, Button } from 'react-bootstrap';

const ConfirmForgotPassword = ({ user, handleChange }) => {
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
				<Button variant='dark' type='submit'>
					Verify
				</Button>
			</Form>
		</div>
	);
};

export default ConfirmForgotPassword;
