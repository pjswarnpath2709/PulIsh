/* eslint-disable react/prop-types */
import "./Table.css";

import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { getOrders, setFilterOptions } from "../../redux/actions/ordersAction";
import Loader from "../Loader/Loader";
import { toast } from "react-toastify";
import { clearError } from "../../redux/slices/ordersSlice";
import moment from "moment";
import TableFilterMenu from "./TableFilterMenu";
import TableSearchBar from "./TableSearchBar";
import { setCurrentOrder } from "../../redux/slices/singleOrderSlice";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import {
  clearError as SingleOrderClearError,
  clearMessage as SingleOrderClearMessage,
} from "../../redux/slices/singleOrderSlice";
import {
  toggleOrderStatus,
  deleteOrder,
} from "../../redux/actions/singleOrderAction";
import { Button } from "@mui/material";

// eslint-disable-next-line react/prop-types
const Table = ({ height, overflowY }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  // orders handle logic here
  const dispatch = useDispatch();
  const { orders, loading, error, filters, currentPage, totalPages } =
    useSelector((state) => state.orders);
  useEffect(() => {
    dispatch(getOrders({}));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getOrders(filters));
  }, [dispatch, filters]);

  useEffect(() => {
    if (error) {
      toast.error(error, { position: "top-center" });
      dispatch(clearError());
    }
  }, [error, dispatch]);

  const { message: singleOrderMessage, error: singleOrderError } = useSelector(
    (state) => state.singleOrder
  );
  useEffect(() => {
    const toastOptions = { position: "top-center" };
    if (singleOrderMessage) {
      toast.success(singleOrderMessage, toastOptions);
      dispatch(SingleOrderClearMessage());
      dispatch(getOrders(filters));
    }
    if (singleOrderError) {
      toast.error(singleOrderError, toastOptions);
      dispatch(SingleOrderClearError());
    }
  }, [singleOrderMessage, singleOrderError, dispatch, filters]);
  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {isModalOpen && <Modal open={isModalOpen} handleClose={closeModal} />}
      <div className="tabular-wrapper">
        <div className="table-main">
          <h3>Orders Data</h3>
          <TableSearchBar />
          <div style={{ display: "flex", justifyContent: "end" }}>
            <TableFilterMenu />
          </div>
        </div>
        <div
          style={{ height: `${height}`, overflowY: `${overflowY}` }}
          className="table-container"
        >
          <TableWrapper>
            {orders?.map((order, ind) => {
              return (
                <TableRow
                  key={order._id + ind}
                  order={order}
                  onClickButtonEdit={openModal}
                />
              );
            })}
          </TableWrapper>
        </div>
        <div className="table-buttons">
          {currentPage > 1 && (
            <Button
              onClick={() => {
                dispatch(setFilterOptions({ page: currentPage - 1 }));
              }}
              variant="contained"
              className="table-button-prev"
            >
              Previous
            </Button>
          )}
          {currentPage < totalPages && (
            <Button
              onClick={() => {
                dispatch(setFilterOptions({ page: currentPage + 1 }));
              }}
              variant="contained"
              className="table-button-next"
            >
              Next
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

const TableWrapper = ({ children }) => {
  return (
    <table>
      <TableHeader
        headers={[
          "Name",
          "ProblemStatement",
          "Contact Number",
          "Model",
          "Estimate Amount",
          "CreatedAt",
          "Estimate Time",
          "Action",
        ]}
      />
      <tbody>{children}</tbody>
    </table>
  );
};

const TableHeader = ({ headers }) => {
  return (
    <thead>
      <tr>
        {headers.map((header, ind) => (
          <td key={ind}>{header}</td>
        ))}
      </tr>
    </thead>
  );
};

const TableRow = ({ order, onClickButtonEdit }) => {
  const dispatch = useDispatch();
  const { filters } = useSelector((state) => state.orders);
  const onClickButtonEditHandler = () => {
    dispatch(setCurrentOrder(order));
    onClickButtonEdit();
  };
  const getOrdersByFilters = () => {
    dispatch(getOrders(filters));
  };
  const onClickDeleteOrder = () => {
    dispatch(deleteOrder({ orderId: order._id }));
    getOrdersByFilters();
  };
  const onClickComplete = () => {
    dispatch(toggleOrderStatus({ orderId: order._id }));
    getOrdersByFilters();
  };
  const onCLickClose = () => {
    dispatch(toggleOrderStatus({ orderId: order._id }));
    getOrdersByFilters();
  };
  return (
    <tr>
      <td>{order?.customer?.name}</td>
      <td>{order?.problemStatement}</td>
      <td>{order?.customer?.contactNumber}</td>
      <td>{order?.model}</td>
      <td>{order?.estimateAmount}</td>
      <td>{moment(new Date(order?.createdAt)).format("ll")}</td>
      <td>{order?.estimateTime}</td>
      <td className="order-icons">
        <EditIcon
          style={{ color: "gray", cursor: "pointer" }}
          onClick={onClickButtonEditHandler}
        ></EditIcon>
        {order?.orderStatus === "open" ? (
          <CheckIcon
            onClick={onClickComplete}
            style={{ color: "#50C878", cursor: "pointer" }}
          />
        ) : (
          <CloseIcon
            onClick={onCLickClose}
            style={{ color: "#50C878", cursor: "pointer" }}
          />
        )}
        <DeleteIcon
          onClick={onClickDeleteOrder}
          style={{ color: "red", cursor: "pointer" }}
        />
      </td>
    </tr>
  );
};

export default Table;
