import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import '../../hooks/useFirebase'
import useFirebase from "../../hooks/useFirebase";

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {emaill} = useFirebase();

    const auth = getAuth();

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e =>{
        setPassword('passsssssssss')
    }

    const handleRegistration = (e) =>{
        e.preventDefault();
       emaill(email, password)

        // createUserWithEmailAndPassword(auth, email, password)
        // .then(result => {
        //     const user = result.user;
        //     console.log(user)
        // })
        

    }
    return (
        <div>
            <div>
                <h2>Register</h2>
                <h4>Create the Account</h4>
                <form onSubmit={handleRegistration}>
                    <input onBlur={handleEmailChange} type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input onBlur={handlePasswordChange} type="password" name="" id="" placeholder="Your Password" />
                    <br />
                    <input type="password" name="" id="" placeholder="Re-enter your Password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an account? <Link to="/login">Login</Link> </p>
                <button className="bg-warning">Google Sign in</button>
            </div>

        </div>
    );
};

export default Register;