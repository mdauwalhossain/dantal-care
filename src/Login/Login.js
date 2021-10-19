// import React, { useState } from "react";
import { Link } from "react-router-dom";
// import useAuth from "../hooks/useAuth";
import useFirebase from "../hooks/useFirebase";


 const Login = () => {
  //  const { signInUsingGoogle} = useAuth();
  const { signInUsingGoogle} = useFirebase();
  // const {out, setOut} = useState();
  return (
    <div className="">
      <div className=" ">
        
        <div className="col-md-12">
          <div>
            <div className="form-input mt-5">
            <h2>Login</h2>
              <input              
                className="mt-2 p-2"
                type="email"
                placeholder="Email"
              />
              <br />
              <input
                className="mt-2 p-2"
                type="password"
                placeholder="Password"
              />
              <br />
              <div className="login-regiater-btn mt-4">
                <button                 
                  className="btn btn-primary me-1"
                >
                  Register
                </button>
                <button className="btn btn-success ms-1">
                  Login
                </button>
              </div>
            </div>
            <div className="login-btn mt-4">
              <button
                onClick={signInUsingGoogle}
                className="btn btn-info m-2"
              >
                Google sign in
              </button>
              <button className="btn btn-dark m-2">
                Github sign in
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