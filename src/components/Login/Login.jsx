import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className="form-container">
                <h2 className="form-title">Login</h2>
                <form>
                    <div className="form-control">
                        <label htmlFor="">Email</label>
                        <input type="email" name='email' placeholder='Your Email' required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="">Password</label>
                        <input type="password" name='password' placeholder='Your Password' required />
                    </div>
                    <input type="submit" value="Login" className='btn-submit'/>
                    <p>New to Ema-john? <Link to="/signup">Create New Account</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;