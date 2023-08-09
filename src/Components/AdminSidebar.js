import React, { useState } from "react";
import "./AdminSidebarStyle.css";
import VetLogo from '../Assets/VetLogo.PNG';
import {
  FaCommentAlt,
  FaRegChartBar,
  FaShoppingBag,
  FaTh,
  FaBars,
  FaUserMd,
  FaHospital,
  FaUserAlt,
  FaHouseUser,
  FaPowerOff
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const AdminSidebar = () => {

  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/adminmanagehospital",
      name: "Hospital",
      icon: <FaHospital />,
    },
    {
      path: "/doctors",
      name: "Doctors",
      icon: <FaUserMd />,
    },
    {
      path: "/establishment",
      name: "Products",
      icon: <FaShoppingBag />,
    },
    {
      path: "/establishment",
      name: "Shop Owner",
      icon: <FaShoppingBag />,
    },
    {
      path: "/establishment",
      name: "Animal Guardian",
      icon: <FaUserAlt />,
    },
    {
      path: "/notification",
      name: "Notification",
      icon: <FaCommentAlt />,
    },
    {
      path: "/report",
      name: "Report",
      icon: <FaRegChartBar />,
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
    <div className="container1">
      <div style={{ width: isOpen ? "300px" : "50px" }} className="sidebar">
        <div className="top_section">
          {/* style={{display: isOpen ? 'block' : 'none'}} */}
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
          <div>
          <img src={VetLogo} style={{borderRadius:'50%', width:'70%'}}/>
            </div>
            Admin Dashboard
          </h1>
          {/* style={{marginLeft: isOpen ? '50px' : '0px'}} */}
          <div className="bars" style={{ marginLeft: isOpen ? "50px" : "0px", marginTop: isOpen ? "150px" : "0px" }}>
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

export default AdminSidebar;
