import "./Table.css";
import SortIcon from "@mui/icons-material/Sort";
import {
  Menu,
  MenuItem,
  // StyledInputBase,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import Modal from "../Modal/Modal";
import Checkbox from "@mui/material/Checkbox";

// eslint-disable-next-line react/prop-types
const Table = ({ height, overflowY }) => {
  const [openDialog, setOpenDialog] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenMenu = (event) => {
    setOpenDialog(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpenDialog(null);
  };

  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchText);
    setSearchText("");
  };
  return (
    <>
      <Modal open={isModalOpen} handleClose={closeModal} />
      <div className="tabular-wrapper">
        <div className="table-main">
          <h3>Orders Data</h3>
          <div className="search-container">
            <input type="text" id="search-bar" placeholder="Search..." />
            <div id="search-icon">
              <SearchIcon onClick={handleSearch} style={{ color: "gray" }} />
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <SortIcon
              onClick={handleOpenMenu}
              style={{
                width: "2rem",
                height: "1.5rem",
                boxShadow: "rgba(0, 0, 0, .3) 3px 3px 1px",
                borderRadius: "4px",
                color: "gray",
                marginRight: "8px",
              }}
            />
          </div>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={openDialog}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(openDialog)}
            onClose={handleCloseMenu}
          >
            <MenuItem onClick={handleCloseMenu}>
              <label className="menu-label" htmlFor="">
                Start Date
              </label>
              <input
                style={{ padding: ".4rem", borderRadius: "4px" }}
                type="date"
                required
              />
            </MenuItem>
            <MenuItem onClick={handleCloseMenu}>
              <label className="menu-label" htmlFor="">
                End Date
              </label>
              <input
                style={{ padding: ".4rem", borderRadius: "4px" }}
                type="date"
                required
              />
            </MenuItem>
            <MenuItem>
              <label className="menu-label" htmlFor="">
                Payment Pending
              </label>
              <Checkbox />
            </MenuItem>
            <MenuItem>
              <label className="menu-label" htmlFor="">
                Payment Completed
              </label>
              <Checkbox />
            </MenuItem>
          </Menu>
        </div>
        <div
          style={{ height: `${height}`, overflowY: `${overflowY}` }}
          className="table-container"
        >
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
                  <button onClick={openModal}>Edit</button>
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
    </>
  );
};

export default Table;
