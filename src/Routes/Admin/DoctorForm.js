import React from "react";
import { Link } from "react-router-dom";

const myStyle={
    marginLeft: "20px"
};
const DoctorForm = () =>{
    return(
        <div className='d-flex justify-content-center align-items-center'>
            <div className='p-3 rounded' style={{width:'50%', backgroundColor:'black'}}>
                {/* {JSON.stringify(data)} */}
                <h2 className="mb-4" style={{color:"white", textAlign:'center'}}>Doctor Registration</h2>
                <form onSubmit=''>
                <div className='mb-4'>
                        <label htmlFor='name'><strong style={{color:"white"}}>Name :</strong></label>
                        <input type='text' id="name" placeholder='Enter name' style={myStyle} className='rounded-0'/>
                    </div>
                        <div className='mb-4'>
                        <label htmlFor='mblNo'><strong style={{color:"white"}}>Mobile Number :</strong></label>
                        <input type='number' id="mblNo" placeholder='Enter Mobile Number' style={myStyle}/>
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='wtspNo'><strong style={{color:"white"}}>WhatsApp Number :</strong></label>
                        <input type='number' id="wtspNo" placeholder='WhatsApp Number' style={myStyle}/>
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='emailId'><strong style={{color:"white"}}>Email :</strong></label>
                        <input type='emailId' id="emailId"placeholder='Enter Email' style={myStyle}/>
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='website'><strong style={{color:"white"}}>Website :</strong></label>
                        <input type='url' id="website" placeholder='Enter Website' style={myStyle}/>
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='opendate'><strong style={{color:"white"}}>Hospital Opening Date :</strong></label>
                        <input type='date' id="opendate" placeholder='Enter Hospital Opening Date' style={myStyle}/>
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='opentime'><strong style={{color:"white"}}>Opening Time :</strong></label>
                        <input type='time' id="opentime" placeholder='Enter Opening Time'style={myStyle}/>
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='closetime'><strong style={{color:"white"}}>Closing Time :</strong></label>
                        <input type='time' id="closetime" placeholder='Enter Closing Time' style={myStyle}/>
                    </div>
                    <div className='mb-5'>
                        <label htmlFor='about'><strong style={{color:"white"}}>About Hospital :</strong></label>
                        <input type='text' id="about" placeholder='Enter About Hospital' style={myStyle}/>
                    </div>
                    {/* <div className='mb-2'>
                        <label htmlFor='verified'><strong>Is Verified?</strong></label>
                        <input type='radio' id="verified"  className='form-control rounded-0'>Yes</input>
                        <input type='radio' id="verified"  className='form-control rounded-0'>No</input>
                    </div> */}
                    <Link to="/dashboard" className='btn btn-success rounded-0 mb-4' style={{width:'50%', marginLeft:'25%', backgroundColor:'white', color:'black'}}><b>REGISTER</b></Link>
                </form>
            </div>
        </div>
    );
}

export default DoctorForm;