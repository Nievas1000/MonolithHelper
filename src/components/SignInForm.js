import { Form, Button } from 'react-bootstrap';
import { Auth } from 'aws-amplify';
import GoogleButton from 'react-google-button'


const SignInForm = ({setUiState, user, handleChange}) =>{

    async function signIn(e) {
        e.preventDefault()
        console.log(user);
        try {
            const user1 = await Auth.signIn(user.email, user.password);
            console.log(user1);
        } catch (error) {
            console.log('error signing in', error);
        }
    }
    
    return(
        <div>
            <GoogleButton className='mb-3' onClick={() => Auth.federatedSignIn({provider:"Google"})}/>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username or Email Address</Form.Label>
                <Form.Control name='email' type="email" value={user.email} placeholder="Enter email" onChange={handleChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" value={user.password} placeholder="Password" onChange={handleChange}/>
                </Form.Group>
                <Button variant="dark" type="submit" onClick={signIn}>
                Sign In
                </Button>
            </Form>
            <p className='d-flex mt-4'>Don't have an account?
                <p className="d-flex" role="button" onClick={() => setUiState('signUp')}> Sign Up.</p>
            </p>
        </div>
    )
}

export default SignInForm