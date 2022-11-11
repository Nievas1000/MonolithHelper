import { Form, Button } from 'react-bootstrap';
import { Auth } from 'aws-amplify';

const ForgotPasswordForm = ({setUiState, user, handleChange}) =>{

    async function forgotPassword(e) {
        e.preventDefault()
        try {
          let data = await Auth.forgotPassword(user.email)
          console.log(data);
          setUiState('forgotPasswordConfirm')
        } catch (err) { console.log({ err}) }
      }
    
    return(
        <div>
            <Form>
                <h5 className='mb-3'>Reset your password</h5>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Enter your email.</Form.Label>
                <Form.Control name='email' type="email" value={user.email} placeholder="Enter email" onChange={handleChange}/>
                </Form.Group>

                <Button variant="dark" type="submit" onClick={forgotPassword}>
                    Send verification code
                </Button>
            </Form>
        </div>
    )
}

export default ForgotPasswordForm