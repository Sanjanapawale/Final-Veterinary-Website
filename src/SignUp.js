import React from "react";
import { Link } from "react-router-dom";
function SignUp()
{
    return(
        <div className='d-flex justify-content-center align-items-center bg-primary vh-120'>
            <div className='bg-white p-3 rounded w-75'>
                <h2>Sign-Up</h2>
                <form action=''>
                <div className='mb-2'>
                        <label htmlFor='fname'><strong>First Name</strong></label>
                        <input type='text' placeholder='Enter First name' className='form-control rounded-0'/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='lname'><strong>Last Name</strong></label>
                        <input type='text' placeholder='Enter Last name' className='form-control rounded-0'/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='city'><strong>City</strong></label>
                        <input type='text' placeholder='Enter City' className='form-control rounded-0'/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='mno'><strong>Mobile Number</strong></label>
                        <input type='number' placeholder='Enter Mobile Number' className='form-control rounded-0'/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input type='email' placeholder='Enter Email' className='form-control rounded-0'/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input type='password' placeholder='Enter Password'className='form-control rounded-0'/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='cpassword'><strong>Confirm Password</strong></label>
                        <input type='text' placeholder='Enter Confirm Password' className='form-control rounded-0'/>
                    </div>
                    <button className='btn btn-success w-100 rounded-0 mb-2'>Sign Up</button>
                    <Link to="/" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
                </form>
            </div>
        </div>
    );
}

export default SignUp;