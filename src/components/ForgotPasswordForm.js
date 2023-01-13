import { Form, Button } from 'react-bootstrap';

const ForgotPasswordForm = ({ user, handleChange }) => {
	return (
		<div>
			<Form>
				<h5 className='mb-3'>Reset your password</h5>
				<Form.Group className='mb-3' controlId='formBasicEmail'>
					<Form.Label>Enter your email.</Form.Label>
					<Form.Control
						name='email'
						type='email'
						value={user.email}
						placeholder='Enter email'
						onChange={handleChange}
					/>
				</Form.Group>
				<Button variant='dark' type='submit'>
					Send verification code
				</Button>
			</Form>
		</div>
	);
};

export default ForgotPasswordForm;
