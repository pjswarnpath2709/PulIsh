// /* eslint-disable react/prop-types */
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useState } from "react";
import "./Sidebar.css";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/actions/authAction";

import { NavLink, Outlet } from "react-router-dom";
import "./Sidebar.css";
// eslint-disable-next-line react/prop-types
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const confirmLogout = (e) => {
    e.preventDefault();

    const logoutYes = window.confirm("do you really want to leave this site");
    if (logoutYes) {
      handleLogout();
    }
  };
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
  };
  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <SpaceDashboardIcon />,
    },
    {
      path: "/dashboard/orders",
      name: "Orders",
      icon: <AssignmentIcon />,
    },
    {
      path: "/dashboard/profile",
      name: "Account",
      icon: <AccountBoxIcon />,
    },
  ];
  return (
    <div className="sidebar-container">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="sidebar-top_section">
          <h1
            style={{ display: isOpen ? "block" : "none" }}
            className="sidebar-logo"
          >
            Pulish
          </h1>
          <div
            style={{ marginLeft: isOpen ? "50px" : "0px" }}
            className="sidebar-bars"
          >
            <MenuRoundedIcon onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="sidebar-link"
            activeclassname="sidebar-active"
          >
            <div className="sidebar-icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="sidebar-link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
        <div
          className="sidebar-link"
          style={{ cursor: "pointer" }}
          onClick={confirmLogout}
        >
          <LogoutIcon />
          <div className="sidebar-link_text">Logout</div>
        </div>
      </div>

      <div className="sidebar-main">
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;
