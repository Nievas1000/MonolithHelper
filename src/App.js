import { useState, useEffect } from 'react';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import { Auth } from 'aws-amplify';
import ConfirmSignUp from './components/ConfirmSignUp';

function App() {
  const [uiState, setUiState] = useState('signIn');
  const [user, setUser] = useState({email:'',name:'',lastname:'',password:'', authCode:''});

    useEffect(() =>{
      const checkUser = async () =>{
          const userLog = await Auth.currentAuthenticatedUser();
          console.log(userLog.attributes);
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
