import { getAuth,} from "firebase/auth";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFirebase from "../../hooks/useFirebase";
import './Register.css'
// import '../../hooks/useFirebase'
// import useFirebase from "../../hooks/useFirebase";

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {emaill} = useFirebase();
    const {signInUsingGoogle} = useFirebase();

    const auth = getAuth();

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e =>{
        setPassword(e.target.value)
    }

    const handleRegistration = (e) =>{
        e.preventDefault();
       emaill(email, password)    
    }
    return (
        <div className="reg">
            <div>
                <h2>Register</h2>
                <h4>Create the Account</h4>
                <form onSubmit={handleRegistration}>
                    <input type="text" name="" id="" placeholder="Name"/>
                    <br /><br />
                    <input onBlur={handleEmailChange} type="email" name="" id="" placeholder="Your Email" />
                    <br /><br />
                    <input onBlur={handlePasswordChange} type="password" name="" id="" placeholder="Your Password" />
                    <br /><br />
                    {/* <input type="password" name="" id="" placeholder="Re-enter your Password" />
                    <br /><br /> */}
                    <input className="btn btn-success ms-1" type="Submit" value="Submit" />
                </form>
                <p>Already have an account? <Link to="/login" style={{ textDecoration: 'none', color:"red"}}>Login</Link> </p>
                <button onClick={signInUsingGoogle} className="btn btn-primary m-2">Google Sign in</button>
            </div>
            <br /><br /><br />
        </div>
    );
};

export default Register;