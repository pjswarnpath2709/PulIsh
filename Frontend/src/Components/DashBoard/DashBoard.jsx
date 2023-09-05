import "./DashBoard.css";
import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";
import TaskRoundedIcon from "@mui/icons-material/TaskRounded";
import PendingActionsRoundedIcon from "@mui/icons-material/PendingActionsRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import Table from "../Table/Table";

const DashBoard = () => {
  return (
    <>
      <div className="main-content">
        <header className="header">
          <h1>Dashboard</h1>
        </header>
        <main className="card-container">
          <div className="card-wrapper">
            <div className="payment-card light-purple">
              <div className="card-header">
                <div className="amount">
                  <span className="title">Total Amount</span>
                  <span className="amount-value">Rs. 5000</span>
                </div>
                <CurrencyRupeeRoundedIcon
                  style={{
                    background: "rgba(113, 99, 186, 255)",
                    width: "2.5rem",
                    height: "2.5rem",
                    borderRadius: "50%",
                    color: "white",
                    fontSize: "1rem",
                  }}
                />
              </div>
            </div>
            <div className="payment-card light-purple">
              <div className="card-header">
                <div className="amount">
                  <span className="title">Total Orders</span>
                  <span className="amount-value">100</span>
                </div>
                <AssignmentRoundedIcon
                  style={{
                    background: "white",
                    width: "2.5rem",
                    height: "2.5rem",
                    borderRadius: "50%",
                    color: "gray",
                    fontSize: "1rem",
                  }}
                />
              </div>
            </div>
            <div className="payment-card light-purple">
              <div className="card-header">
                <div className="amount">
                  <span className="title">Pending Orders</span>
                  <span className="amount-value">30</span>
                </div>
                <PendingActionsRoundedIcon
                  style={{
                    background: "white",
                    width: "2.5rem",
                    height: "2.5rem",
                    borderRadius: "50%",
                    color: "red",
                    fontSize: "1rem",
                  }}
                />
              </div>
            </div>
            <div className="payment-card light-purple">
              <div className="card-header">
                <div className="amount">
                  <span className="title">Completed Orders</span>
                  <span className="amount-value">70</span>
                </div>
                <TaskRoundedIcon
                  style={{
                    background: "#77dd77",
                    width: "2.5rem",
                    height: "2.5rem",
                    borderRadius: "50%",
                    color: "white",
                    fontSize: "1rem",
                  }}
                />
              </div>
            </div>
          </div>
        </main>
        <Table height={"450px"} overflowY={"auto"} />
      </div>
    </>
  );
};

export default DashBoard;
