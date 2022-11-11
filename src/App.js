import { useState, useEffect } from 'react';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import ConfirmSignUp from './components/ConfirmSignUp';
import ForgotPasswordForm from './components/ForgotPasswordForm';
import { Amplify, Auth } from 'aws-amplify';
import awsmobile from './aws-exports';
import ConfirmForgotPassword from './components/ConfirmForgotPassword';


Amplify.configure(awsmobile);


function App() {
  const [uiState, setUiState] = useState('signIn');
  const [user, setUser] = useState({email:'',name:'',lastname:'',password:'', authCode:''});

    useEffect(() =>{
      const checkUser = async () =>{
          try {
            const userLog = await Auth.currentAuthenticatedUser();
            console.log(userLog.attributes);
          } catch (error) {
            console.log(error);
          }
      }
      checkUser()
    }, [])

    const handleChange = (e) =>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }


  return (
    <div className="App">
      <div className="row">
        <div className="col-4 container-codojo d-flex justify-content-center align-items-center">
            <h1>Codojo</h1>
        </div>
        <div className="col-8">
          <div className="d-flex justify-content-end">
            <p className='d-flex' role="button" onClick={()=> Auth.signOut()}>Sign Out</p>
          </div>
          <div className='container-form d-flex justify-content-center align-items-center'>
            <div className='zone-form'>
              {uiState === 'signIn' && (
                <SignInForm setUiState={setUiState} user={user} handleChange={handleChange}/>
              )}

              {uiState === 'signUp' && (
                <SignUpForm setUiState={setUiState} user={user} handleChange={handleChange}/>
              )}

              {uiState === 'confirmSingUp' && (
                <ConfirmSignUp setUiState={setUiState} user={user} handleChange={handleChange}/>
              )}
              {uiState === 'forgotPassword' && (
                <ForgotPasswordForm setUiState={setUiState} user={user} handleChange={handleChange}/>
              )}
              {uiState === 'forgotPasswordConfirm' && (
                <ConfirmForgotPassword setUiState={setUiState} user={user} handleChange={handleChange}/>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default  App;
