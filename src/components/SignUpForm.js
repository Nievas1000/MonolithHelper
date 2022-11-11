import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Auth } from 'aws-amplify';
import GoogleButton from 'react-google-button'
import { Link, useNavigate } from 'react-router-dom';


const SignUpForm = ({user, handleChange}) =>{
    const [error, setError] = useState(null);
    const navigate = useNavigate()

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
            navigate("/confirm")
        } catch (error) {
            setError(error.message);
            console.log(error.message);
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
                <Form.Control name='name' type="text" value={user.name} placeholder="Enter name" onChange={handleChange}/>
                </Form.Group>

                <Form.Group className="mb-3">
                <Form.Label>Latname</Form.Label>
                <Form.Control name='lastname' type="text" value={user.lastname} placeholder="Enter lastname" onChange={handleChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" value={user.password} placeholder="Password" onChange={handleChange}/>
                </Form.Group>
                <Button variant="dark" type="submit" onClick={signUp}>
                Sign Up
                </Button>
                {error && (
                    <div className="alert alert-danger d-flex mt-2" role="alert">
                        {error + " Try again"}
                    </div>
                )}
            </Form>
            <span className='d-flex mt-4'>Already have an account?
            <Link to="/">SignUp</Link>
            </span>
        </div>
    )
}

export default SignUpForm