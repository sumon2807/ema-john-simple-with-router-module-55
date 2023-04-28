import React, { useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const[error, setError]=useState('');

    const handleSignUp=event=>{
        event.preventDefault();

        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        const confirm=form.confirm.value;
        console.log(email, password, confirm)

        if(password !==confirm){
            setError('Your password did not match')
            return;
        }
        else if(password.length<6){
            setError('Password must be 6 cheracters');
            return;
        }
    }
    return (
        <div>
            <div className="form-container">
                    <h2 className="form-title">Sign Up</h2>
                    <form onSubmit={handleSignUp}>
                    <div className="form-control">
                        <label htmlFor="">Email</label>
                        <input type="email" name='email' placeholder='Your Email' required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="">Password</label>
                        <input type="password" name='password' placeholder='Your Password' required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="confirm">Confirm Password</label>
                        <input type="password" name='confirm' placeholder='Your Password' required />
                    </div>
                    <p className='text-error'>{error}</p>
                    <input type="submit" value="Register" className='btn-submit'/>
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;