import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SignInForm = () =>{
    const [user, setUser] = useState({email:'',password:''});

    const handleChange = (e) =>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }
    return(
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username or Email Address</Form.Label>
                <Form.Control name='email' type="email" value={user.email} placeholder="Enter email" onChange={handleChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" value={user.password} placeholder="Password" onChange={handleChange}/>
                </Form.Group>
                <Button variant="dark" type="submit">
                Sign In
                </Button>
            </Form>
        </div>
    )
}

export default SignInForm