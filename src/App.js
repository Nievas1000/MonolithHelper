import { useEffect, useState } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

function App() {
  const [user, setUser] = useState({})
  
  const handleCallbackResponse = async (response) =>{
    let userData = jwtDecode(response.credential);
    try {
      let result = await axios.post(`${process.env.REACT_APP_BASE_URL}/user/login`,{
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
      client_id: process.env.REACT_APP_CLIENT_ID,
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
