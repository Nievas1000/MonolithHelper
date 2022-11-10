import { useEffect, useState } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { withAuthenticator } from '@aws-amplify/ui-react';

function App({signOut, user}) {
  const [user1, setUser] = useState({})
  
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
  
  console.log(user.attributes)
  return (
    <div className="App">
      <div className="row">
        <div className="col-4 container-codojo d-flex justify-content-center align-items-center">
            <h1>Codojo</h1>
        </div>
        <div className="col-8 container-form d-flex justify-content-center align-items-center">
          <div className='zone-form'>
            <div id='signInDiv' className='mb-4'></div>
            <button onClick={signOut}>Sign out</button>
            <h1>Hola</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAuthenticator(App);
