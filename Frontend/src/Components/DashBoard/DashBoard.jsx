import "./DashBoard.css";

import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";
import TaskRoundedIcon from "@mui/icons-material/TaskRounded";
import PendingActionsRoundedIcon from "@mui/icons-material/PendingActionsRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";

const DashBoard = () => {
  return (
    <>
      <div className="main-content">
        <header>
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
        <div className="tabular-wrapper">
          <h3 className="main-title">Orders Data</h3>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>S No.</th>
                  <th>Cust. Name</th>
                  <th>Problem</th>
                  <th>Contact Number</th>
                  <th>Model</th>
                  <th>Amount</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Rohan</td>
                  <td>display crack</td>
                  <td>8498249284</td>
                  <td>pixel 5</td>
                  <td>300.00</td>
                  <td>05-07-2023</td>
                  <td>
                    <button>Edit</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Rohan</td>
                  <td>display crack</td>
                  <td>8498249284</td>
                  <td>pixel 5</td>
                  <td>300.00</td>
                  <td>05-07-2023</td>
                  <td>
                    <button>Edit</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Rohan</td>
                  <td>display crack</td>
                  <td>8498249284</td>
                  <td>pixel 5</td>
                  <td>300.00</td>
                  <td>05-07-2023</td>
                  <td>
                    <button>Edit</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
