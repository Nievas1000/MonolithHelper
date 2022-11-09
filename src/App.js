import { useEffect, useState } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { Amplify } from 'aws-amplify';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App() {
  const [user, setUser] = useState({})
  
  const handleCallbackResponse = async (response) =>{
    let userData = jwtDecode(response.credential);
    try {
      let result = await axios.post('http://localhost:3001/user/login',{
        user: userData
      });
      console.log(result.data[0])
      setUser(result.data[0])
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() =>{
    /* global google */
    google.accounts.id.initialize({
      client_id: "684832352099-5t2dq3sg22l16rljk5c2cac3bo67hcn6.apps.googleusercontent.com",
      callback : handleCallbackResponse
    })

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme:"filled_blue",size:"large"}
    )

    google.accounts.id.prompt();
  },[])
  
  console.log(user)
  return (
    <div className="App">
      <div className="row">
        <div className="col-4 container-codojo d-flex justify-content-center align-items-center">
            <h1>Codojo</h1>
        </div>
        <div className="col-8 container-form d-flex justify-content-center align-items-center">
          <div className='zone-form'>
            <div id='signInDiv' className='mb-4'></div>
            <Authenticator>
            {({ signOut, user }) => (
              <main>
                <h1>Hello {user.username}</h1>
                <button onClick={signOut}>Sign out</button>
              </main>
            )}
          </Authenticator>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAuthenticator(App);
