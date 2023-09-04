import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import "./Home.css";
import DashBoard from "../DashBoard/DashBoard";

const Home = () => {
  return (
    <>
      <div className="wrapper">
        <nav className="sidebar">
          <div className="logo"></div>
          <ul className="menu">
            <li>
              <a href="#">
                <SpaceDashboardIcon />
                <span>Dashboard</span>
              </a>
            </li>
            <li>
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
        <DashBoard />
      </div>
    </>
  );
};

export default Home;
