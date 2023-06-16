import React from 'react'
import { Link } from 'react-router-dom';

function Login(){
    return(
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-75 vh-75'>
            <h2 className='mb-3'>Sign-In</h2>
                <form action=''>
                    <div className='mb-5'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input type='email' placeholder='Enter Email' className='form-control rounded-0'/>
                    </div>
                    <div className='mb-5'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input type='password' placeholder='Enter Password'className='form-control rounded-0'/>
                    </div>
                    <button className='btn btn-success w-100 rounded-0 mb-5'>Log in</button>
                    <p className='mb-5'>You are agree to our terms and policies</p>
                    <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create Account</Link>
                </form>
            </div>
        </div>
    );
}

export default Login;