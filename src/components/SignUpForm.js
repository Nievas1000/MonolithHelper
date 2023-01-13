import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignUpForm = ({ user, handleChange }) => {
	return (
		<div>
			<Form>
				<Form.Group className='mb-3'>
					<Form.Label>Email Address</Form.Label>
					<Form.Control
						name='email'
						type='email'
						value={user.email}
						placeholder='Enter email'
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group className='mb-3'>
					<Form.Label>Name</Form.Label>
					<Form.Control
						name='name'
						type='text'
						value={user.name}
						placeholder='Enter name'
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group className='mb-3'>
					<Form.Label>Latname</Form.Label>
					<Form.Control
						name='lastname'
						type='text'
						value={user.lastname}
						placeholder='Enter lastname'
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group className='mb-3' controlId='formBasicPassword'>
					<Form.Label>Password</Form.Label>
					<Form.Control
						name='password'
						type='password'
						value={user.password}
						placeholder='Password'
						onChange={handleChange}
					/>
				</Form.Group>
				<Button variant='dark' type='submit'>
					Sign Up
				</Button>
			</Form>
			<span className='d-flex mt-4'>
				Already have an account?
				<Link to='/'>SignUp</Link>
			</span>
		</div>
	);
};

export default SignUpForm;
