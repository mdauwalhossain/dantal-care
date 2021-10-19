import React, { useState } from "react";
import { Link } from "react-router-dom";


 const Login = () => {
//   const {
//     handleGoogleLogin,
//     user,
    // handleGithubLogin,
//     handleUserRegister,
//     handleUserLogin,
//   } = useFirebase();

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const hanldeEmail = (e) => {
  //   setEmail(e.target.value);
  // };
  // const hanldePassword = (e) => {
  //   setPassword(e.target.value);
  //  };

  // console.log(email, password);

  // const handleRegister = () => {
  //   handleUserRegister(email, password);
  // };

  // const handleLogin = () => {
  //   handleUserLogin(email, password);
  // };

  return (
    <div className="">
      <div className=" ">
        
        <div className="col-md-12">
          <div>
            <div className="form-input mt-5">
            <h2>Login</h2>
              <input
                // onChange={hanldeEmail}
                className="mt-2 p-2"
                type="email"
                placeholder="Email"
              />
              <br />
              <input
                // onChange={hanldePassword}
                className="mt-2 p-2"
                type="password"
                placeholder="Password"
              />
              <br />
              <div className="login-regiater-btn mt-4">
                <button
                  // onClick={handleRegister}
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
                // onClick={handleGoogleLogin}
                className="btn btn-warning m-2"
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