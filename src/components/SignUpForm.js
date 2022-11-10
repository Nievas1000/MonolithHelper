import { Form, Button } from 'react-bootstrap';
import { Auth } from 'aws-amplify';
import GoogleButton from 'react-google-button'


const SignUpForm = ({setUiState, user, handleChange}) =>{

    async function signUp(e) {
        e.preventDefault()
        try {
             await Auth.signUp({
                username: user.email,
                password: user.password,
                attributes: {
                    email: user.email,
                    name: user.name,
                    family_name: user.lastname
                },
                autoSignIn: {
                    enabled: true,
                }
            });
            setUiState('confirmSingUp')
        } catch (error) {
            console.log('error signing up:', error);
        }
    }
    
    return(
        <div>
            <GoogleButton label='Sing up with Google' onClick={() => Auth.federatedSignIn({provider:"Google"})}/>
            <Form>
                <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control name='email' type="email" value={user.email} placeholder="Enter email" onChange={handleChange}/>
                </Form.Group>

                <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control name='name' type="text" value={user.name} placeholder="Enter email" onChange={handleChange}/>
                </Form.Group>

                <Form.Group className="mb-3">
                <Form.Label>Latname</Form.Label>
                <Form.Control name='lastname' type="text" value={user.lastname} placeholder="Enter email" onChange={handleChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" value={user.password} placeholder="Password" onChange={handleChange}/>
                </Form.Group>
                <Button variant="dark" type="submit" onClick={signUp}>
                Sign Up
                </Button>
            </Form>
            <p className='d-flex mt-4'>Already have an account?
                <p className="d-flex" role="button" onClick={() => setUiState('signIn')}> Sign In.</p>
            </p>
        </div>
    )
}

export default SignUpForm