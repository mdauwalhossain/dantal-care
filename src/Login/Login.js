import { getAuth } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import useFirebase from "../hooks/useFirebase";
import './Login.css'



 const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const { signInUsingGoogle} = useFirebase(); 
  const {emaill} = useFirebase();

  const auth = getAuth();

  
  const handleEmailChange = e => {
    setEmail(e.target.value);
}

const handlePasswordChange = e =>{
    setPassword(e.target.value)

}


  const handleLogIn = (e) =>{
    e.preventDefault();
   emaill(email, password)
  }
  return (
    <div className="log">
      <h1>Wanna something more...</h1>
      <div className=" ">
        
        <div className="col-md-12">
          <div>
           <form onSubmit={handleLogIn}>
           <div className="form-input mt-5">
            <h2>Login</h2>
              <input 
              onBlur={handleEmailChange}             
                className="mt-2 p-2"
                type="email"
                placeholder="Email"
              />
              <br />
              <input
              onBlur={handlePasswordChange}
                className="mt-2 p-2"
                type="password"
                placeholder="Password"
              />
              <br />
              <div className="login-regiater-btn mt-4">
               
                <button className="btn btn-primary ms-1">
                  Login
                </button>
              </div>
            </div>
           </form>
            <div className="login-btn mt-4">
              <button
                onClick={signInUsingGoogle}
                className="btn btn-info m-2"
              >
                Google sign in
              </button>
             
              <p>New in Dental Care?? <Link to="/register" style={{ textDecoration: 'none', color:"red"}}>Register Here</Link> </p>
            </div>
          </div>
        </div>
       
      </div>
      <br />
    </div>
  );
 };

 export default Login;