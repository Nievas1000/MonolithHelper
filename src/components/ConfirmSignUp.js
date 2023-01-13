import { Form, Button } from 'react-bootstrap';

const ConfirmSignUp = ({ user, handleChange }) => {
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
				<Button variant='dark' type='submit'>
					Continue
				</Button>
			</Form>
		</div>
	);
};

export default ConfirmSignUp;
