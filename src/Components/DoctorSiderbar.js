import React, { useState } from "react";
import "./AdminSidebarStyle.css";
import VetLogo from '../Assets/VetLogo.PNG';
import {
  FaUserAlt,
  FaCommentAlt,
  FaRegChartBar,
  FaShoppingBag,
  FaTh,
  FaBars,
  FaHouseUser,
  FaPowerOff,
  FaUserMd,
  FaHospital,
  FaKeyboard
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const DoctorSidebar = () => {

  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  const menuItem = [
    {
      path: "/profile",
      name: "Profile",
      icon: <FaUserMd />,
    },
    {
      path: "/hospital",
      name: "Hospitals",
      icon: <FaHospital />,
    },
    {
      path: "/doctorappointmentslots",
      name: "Appointment Slots",
      icon: <FaTh />,
    },
    {
      path: "/viewpatient",
      name: "Clients Details",
      icon: <FaUserAlt />,
    },
    {
      path: "/dreport",
      name: "Report",
      icon: <FaRegChartBar />,
    },
    {
      path: "/password",
      name: "Change Password",
      icon: <FaKeyboard />,
    },
    
    {
      path: "/",
      name: "Home",
      icon: <FaHouseUser />,
    },
    {
      path: "/",
      name: "Logout",
      icon: <FaPowerOff />,
    }
  ];
  return (
    <div className="container1" >
      <div style={{ width: isOpen ? "300px" : "50px", backgroundColor:'#146ca4' }} className="sidebar">
        <div className="top_section">
          {/* style={{display: isOpen ? 'block' : 'none'}} */}
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
          <div>
          <img src={VetLogo} style={{borderRadius:'50%', width:'70%'}}/>
            </div>
            Doctor Dashboard
          </h1>
          {/* style={{marginLeft: isOpen ? '50px' : '0px'}} */}
          <div className="bars" style={{ marginLeft: isOpen ? "50px" : "0px", marginTop: isOpen ? "150px" : "0px"  }}>
            {/* onClick={toggle} */}
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeClassName="active"
          >
            <div className="icon">{item.icon}</div>
            {/* style={{display: isOpen ? 'block' : 'none'}} */}
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default DoctorSidebar;
