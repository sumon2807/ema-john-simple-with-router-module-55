import React, { useContext, useState } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const [show, setShow]=useState(false);
    const [error, setError]=useState('');
    const {signIn}=useContext(AuthContext);

    const navigate=useNavigate();
    const location=useLocation();
    console.log(location)
    const from=location.state?.from?.pathname || '/';

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
            navigate(from,{replace:true});
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
                        <input type={show ? "text": "password"} name='password' placeholder='Your Password' required />
                        <p onClick={()=>setShow(!show)}> <small>
                            {
                                show ? <span>Hide Password</span>: <span>show password</span>
                            }
                            </small> </p>
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