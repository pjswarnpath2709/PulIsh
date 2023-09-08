/* eslint-disable react/prop-types */
import "./DashBoard.css";
import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";
import TaskRoundedIcon from "@mui/icons-material/TaskRounded";
import PendingActionsRoundedIcon from "@mui/icons-material/PendingActionsRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import Table from "../Table/Table";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStats } from "../../redux/actions/othersActions";
import { clearError } from "../../redux/slices/othersSlice";
import { toast } from "react-toastify";
import Loader from "../Loader/Loader";

const DashBoardCard = ({ title, icon, data }) => {
  return (
    <div className="payment-card light-purple">
      <div className="card-header">
        <div className="amount">
          <span className="title">{title}</span>
          <span className="amount-value">{data}</span>
        </div>
        {icon}
      </div>
    </div>
  );
};

const DashBoard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStats());
  }, [dispatch]);
  const { stats, loading, error } = useSelector((state) => state.others);
  useEffect(() => {
    if (error) {
      toast.error(error, { position: "top-center" });
      dispatch(clearError());
    }
  }, [error, dispatch]);
  const cards = loading
    ? []
    : [
        {
          title: "Monthly Sales",
          icon: (
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
          ),
          data: `Rs.${stats?.monthlySales}`,
        },
        {
          title: "Total Orders",
          icon: (
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
          ),
          data: stats.totalOrders,
        },
        {
          title: "Completed Orders",
          icon: (
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
          ),
          data: stats.totalCompleteOrders,
        },
        {
          title: "Pending Orders",
          icon: (
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
          ),
          data: stats.totalPendingOrders,
        },
      ];
  return (
    <>
      <div className="main-content">
        <header className="header">
          <h1>Dashboard</h1>
        </header>
        <main className="card-container">
          <div className="card-wrapper">
            {cards.length < 0 ? (
              <Loader />
            ) : (
              cards?.map((card, ind) => (
                <DashBoardCard
                  key={ind}
                  title={card.title}
                  icon={card.icon}
                  data={card.data}
                />
              ))
            )}
          </div>
        </main>
        <Table height={"450px"} overflowY={"auto"} />
      </div>
    </>
  );
};

export default DashBoard;
