import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {signUp} from "../Services/UserService";

function SignUp()
{
    const [data, setdata]=useState({
        fname:'',
        lname:'',
        city:'',
        mno:'',
        email:'',
        password:'',
        cpassword:''
    });

    const [error, seterror] = useState({
        errors:{},
        isError:false
    });

    // useEffect(()=>{
    //     console.log(data);
    // },[data]);

    const handleChange=(event, property)=>{
        setdata({...data, [property]:event.target.value});
    };

    const submitForm = (event)=>{
        event.preventDefault();
        console.log(data);

        signUp(data).then((resp)=>{
            console.log(resp);
            console.log("success log");
        }).catch((error)=>{
            console.log(error);
            console.log("Error log");
        });
    }


    return(
        <div className='d-flex justify-content-center align-items-center bg-primary vh-120'>
            <div className='bg-white p-3 rounded w-50'>
                {/* {JSON.stringify(data)} */}
                <h2>Sign-Up</h2>
                <form onSubmit={submitForm}>
                <div className='mb-2'>
                        <label htmlFor='fname'><strong>First Name</strong></label>
                        <input type='text' id="fname" placeholder='Enter First name' className='form-control rounded-0'
                        onChange={(e)=>handleChange(e,'fname')}
                        value={data.fname}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='lname'><strong>Last Name</strong></label>
                        <input type='text' id="lname" placeholder='Enter Last name' className='form-control rounded-0'
                        onChange={(e)=>handleChange(e,'lname')}
                        value={data.lname}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='city'><strong>City</strong></label>
                        <input type='text' id="city" placeholder='Enter City' className='form-control rounded-0'
                        onChange={(e)=>handleChange(e,'city')}
                        value={data.city}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='mno'><strong>Mobile Number</strong></label>
                        <input type='number' id="mno" placeholder='Enter Mobile Number' className='form-control rounded-0'
                        onChange={(e)=>handleChange(e,'mno')}
                        value={data.mno}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input type='email' id="email"placeholder='Enter Email' className='form-control rounded-0' autoComplete="username"
                        onChange={(e)=>handleChange(e,'email')}
                        value={data.email}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input type='password' id="password" placeholder='Enter Password'className='form-control rounded-0' autoComplete="new-password"
                        onChange={(e)=>handleChange(e,'password')}
                        value={data.password}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='cpassword'><strong>Confirm Password</strong></label>
                        <input type='password' id="cpassword" placeholder='Enter Confirm Password' className='form-control rounded-0' autoComplete="new-password"
                        onChange={(e)=>handleChange(e,'cpassword')}
                        value={data.cpassword}/>
                    </div>
                    <button className='btn btn-success w-100 rounded-0 mb-2'>Sign Up</button>
                    <Link to="/login" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
                </form>
            </div>
        </div>
    );
}

export default SignUp;