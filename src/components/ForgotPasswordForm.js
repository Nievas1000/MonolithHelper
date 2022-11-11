import { Form, Button } from 'react-bootstrap';
import { Auth } from 'aws-amplify';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPasswordForm = ({user, handleChange}) =>{
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    async function forgotPassword(e) {
        e.preventDefault()
        try {
          let data = await Auth.forgotPassword(user.email)
          console.log(data);
          navigate('/confirmforgot')
        } catch (err) {
            setError(err.message)
        }
      }
    
    return(
        <div>
            <Form>
                <h5 className='mb-3'>Reset your password</h5>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Enter your email.</Form.Label>
                <Form.Control name='email' type="email" value={user.email} placeholder="Enter email" onChange={handleChange}/>
                </Form.Group>
                {error && (
                    <div className="alert alert-danger d-flex mt-2" role="alert">
                        Email does not exist
                    </div>
                )}
                <Button variant="dark" type="submit" onClick={forgotPassword}>
                    Send verification code
                </Button>
            </Form>
        </div>
    )
}

export default ForgotPasswordForm