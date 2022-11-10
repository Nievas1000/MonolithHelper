import { Form, Button } from 'react-bootstrap';
import { Auth } from 'aws-amplify';
import { Hub } from 'aws-amplify';

const ConfirmSignUp = ({setUiState, user, handleChange}) =>{

    async function confirmSignUp(e) {
        e.preventDefault();
        try {
            await Auth.confirmSignUp(user.email, user.authCode)
            Hub.listen('auth', ({ payload }) => {
                const { event } = payload;
            if (event === 'autoSignIn') {
                setUiState('signIn')
            } else if (event === 'autoSignIn_failure') {
                console.log("El codigo ingresado es erroneo");
            }
        })
        } catch (err) { console.log({ err })}
    
      }
    
    return(
        <div>
            <Form>
                <h5 className='mb-3'>An activation code has been sent to your email.</h5>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Confirmation code</Form.Label>
                <Form.Control name='authCode' type="text" value={user.authCode} placeholder="Enter email" onChange={handleChange}/>
                </Form.Group>

                <Button variant="dark" type="submit" onClick={confirmSignUp}>
                    Continue
                </Button>
            </Form>
        </div>
    )
}

export default ConfirmSignUp