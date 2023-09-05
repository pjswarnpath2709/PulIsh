/* eslint-disable react/prop-types */
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useEffect, useState } from "react";
import "./Sidebar.css";
const Sidebar = ({ onButtonClick }) => {
  const [hamburger, setHamburger] = useState(window.innerWidth <= 930);

  useEffect(() => {
    const handleResize = () => {
      setHamburger(window.innerWidth <= 930);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      {hamburger ? (
        <div className="sidebar-menuicon">
          <MenuRoundedIcon
            style={{
              margin: "auto",
              marginTop: "1rem",
              display: "flex",
              color: "white",
            }}
          />
        </div>
      ) : (
        <nav className="sidebar">
          <div className="logo">PulIsh</div>
          <ul className="menu">
            <li
              onClick={() => {
                console.log("clicked dashboard");
                onButtonClick("dashboard");
              }}
            >
              <a href="#">
                <SpaceDashboardIcon />
                <span>Dashboard</span>
              </a>
            </li>
            <li onClick={() => onButtonClick("orders")}>
              <a href="#">
                <AssignmentIcon />
                <span>Orders</span>
              </a>
            </li>
            <li>
              <a href="#">
                <AccountBoxIcon />
                <span>Account</span>
              </a>
            </li>
            <li>
              <a href="#">
                <SettingsIcon />
                <span>Settings</span>
              </a>
            </li>
            <li className="logout">
              <a href="#">
                <LogoutIcon />
                <span>Logout</span>
              </a>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Sidebar;
