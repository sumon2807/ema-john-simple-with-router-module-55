import React, { useContext, useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const [error, setError]=useState('');
    const {signIn}=useContext(AuthContext);

    const handleSignIn=event=>{
        event.preventDefault();

        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email, password);

        setError('');
        signIn(email, password)
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser)
            form.reset();
        })
        .catch(error=>{
            setError(error.message)
        })
    }

    return (
        <div>
            <div className="form-container">
                <h2 className="form-title">Login</h2>
                <form onSubmit={handleSignIn}>
                    <div className="form-control">
                        <label htmlFor="">Email</label>
                        <input type="email" name='email' placeholder='Your Email' required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="">Password</label>
                        <input type="password" name='password' placeholder='Your Password' required />
                    </div>
                    <p className='text-error'>{error}</p>
                    <input type="submit" value="Login" className='btn-submit'/>
                    <p>New to Ema-john? <Link to="/signup">Create New Account</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;