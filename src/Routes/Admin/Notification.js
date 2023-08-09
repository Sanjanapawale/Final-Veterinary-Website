import React from "react";
import AdminSidebar from "../../Components/AdminSidebar";

const Notification = () =>{
    const myStyle = {
        display: "flex",
        color: "black",
        backgroundColor: 'skyblue'
    };
    return(
        <div style={myStyle}>
            <AdminSidebar/>
            <h1> Notification page</h1>
        </div>
    );
}

export default Notification;