import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div>
                <h2>Register</h2>
                <h4>Create the Account</h4>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id="" placeholder="Your Password" />
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