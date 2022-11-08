import { useEffect, useState } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import SignInForm from './components/SignInForm';

function App() {
  const [user, setUser] = useState({})
  
  const handleCallbackResponse = async (response) =>{
    let user = jwtDecode(response.credential);
    setUser(user);
    try {
      let result = await axios.post(`${process.env.REACT_APP_BASE_URL}/user/login`,{
        user
      });
      console.log(result.data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() =>{
    /* global google */
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_CLIENT_ID,
      callback : handleCallbackResponse
    })

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme:"filled_blue",size:"large"}
    )

    google.accounts.id.prompt();
  },[])

  return (
    <div className="App">
      <div className="row">
        <div className="col-4 container-codojo d-flex justify-content-center align-items-center">
            <h1>Codojo</h1>
        </div>
        <div className="col-8 container-form d-flex justify-content-center align-items-center">
          <div className='zone-form'>
            <h2 className='mb-3'>Sign to dribble.</h2>
            <div id='signInDiv' className='mb-4'></div>
            <SignInForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
