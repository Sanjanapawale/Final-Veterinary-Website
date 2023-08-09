import React from "react";
import AdminSidebar from "../../Components/AdminSidebar";

const Establishment = () =>{
    const myStyle = {
        display: "flex",
        color: "black",
        backgroundColor: 'skyblue'
    };
    return(
        <div style={myStyle}>
            <AdminSidebar/>
            <h1>Establishment page</h1>
        </div>
    );
}

export default Establishment;