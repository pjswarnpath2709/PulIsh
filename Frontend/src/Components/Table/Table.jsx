/* eslint-disable react/prop-types */
import "./Table.css";

import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../redux/actions/ordersAction";
import Loader from "../Loader/Loader";
import { toast } from "react-toastify";
import { clearError } from "../../redux/slices/ordersSlice";
import moment from "moment";
import TableFilterMenu from "./TableFilterMenu";
import TableSearchBar from "./TableSearchBar";
import { setCurrentOrder } from "../../redux/slices/singleOrderSlice";

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
  const { orders, loading, error, filters } = useSelector(
    (state) => state.orders
  );
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
  const onClickButtonEditHandler = () => {
    dispatch(setCurrentOrder(order));
    onClickButtonEdit();
  };
  return (
    <tr>
      <td>{order?.customer?.name}</td>
      <td>{order?.problemStatement}</td>
      <td>{order?.customer?.contactNumber}</td>
      <td>{order?.model}</td>
      <td>{order?.estimateAmount}</td>
      <td>{moment(new Date(order?.createdAt)).format("ll")}</td>
      <td>
        <button onClick={onClickButtonEditHandler}>Edit</button>
      </td>
    </tr>
  );
};

export default Table;
