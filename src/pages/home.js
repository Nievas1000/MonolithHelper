import { useEffect } from 'react';
import { Auth } from 'aws-amplify';

const Home = () =>{

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


    return(
        <div className="d-flex justify-content-center align-items-center">
            Bienvenido a Codojo 
        </div>
    )
}

export default Home