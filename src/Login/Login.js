import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
// import React, { useState } from "react";
import { Link } from "react-router-dom";
// import useAuth from "../hooks/useAuth";
import useFirebase from "../hooks/useFirebase";


 const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //  const { signInUsingGoogle} = useAuth();
  const { signInUsingGoogle} = useFirebase();
  // const {out, setOut} = useState();
  const {emaill} = useFirebase();

  const auth = getAuth();

  const handleEmailChange = e => {
    setEmail(e.target.value);
}

const handlePasswordChange = e =>{
    setPassword('passsssssssss')
}


  const handleLogIn = (e) =>{
    e.preventDefault();
   emaill(email, password)
  }
  return (
    <div className="">
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
               
                <button className="btn btn-success ms-1">
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
             
              <p>New in Dental Care?? <Link to="/register">Follow the steps</Link> </p>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
 };

 export default Login;