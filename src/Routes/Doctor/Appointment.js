import React from "react";
import DoctorSidebar from "../../Components/DoctorSiderbar";

const Appointment = () =>{

    const myStyle = {
        display: "flex",
        color: "black",
        backgroundColor: 'skyblue'
    };
    return(
        <>
        <div style={myStyle}>
            <DoctorSidebar/>
            <h1>Appointment page</h1>
        </div>
        </>
    );
}

export default Appointment;