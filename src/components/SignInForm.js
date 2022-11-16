import { Form, Button } from 'react-bootstrap';
import { Auth } from 'aws-amplify';
import GoogleButton from 'react-google-button';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SignInForm = ({ user, handleChange }) => {
	const [error, setError] = useState(null);

	async function signIn(e) {
		e.preventDefault();
		try {
			const user1 = await Auth.signIn(user.email, user.password);
			console.log(user1);
			setError(null);
		} catch (error) {
			setError(error.message);
		}
	}

	return (
		<div>
			<GoogleButton
				className='mb-3'
				onClick={() => Auth.federatedSignIn({ provider: 'Google' })}
			/>
			<Form>
				<Form.Group className='mb-3' controlId='formBasicEmail'>
					<Form.Label>Username or Email Address</Form.Label>
					<Form.Control
						name='email'
						type='email'
						value={user.email}
						placeholder='Enter email'
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
					{error && (
						<div className='alert alert-danger d-flex mt-2' role='alert'>
							{error + ' Try again'}
						</div>
					)}
					<Link className='d-flex mt-2' to='/rocover'>
						I forgot my password
					</Link>
				</Form.Group>
				<Button variant='dark' type='submit' onClick={signIn}>
					Sign In
				</Button>
			</Form>
			<span className='d-flex mt-4'>
				Don&apos;t have an account?
				<Link to='/signup'>SignUp</Link>
			</span>
		</div>
	);
};

export default SignInForm;
