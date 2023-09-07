import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Menu,
  MenuItem,
  Radio,
  RadioGroup,
  // StyledInputBase,
} from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilterOptions } from "../../redux/actions/ordersAction";

const TableFilterMenu = () => {
  const [openDialog, setOpenDialog] = useState(null);
  const dispatch = useDispatch();
  const { filters } = useSelector((state) => state.orders);
  const handleOpenMenu = (event) => {
    setOpenDialog(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setOpenDialog(null);
  };
  return (
    <>
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
        {/* <MenuItem>
          <label className="menu-label" htmlFor="">
            Start Date
          </label>
          <input
            style={{ padding: ".4rem", borderRadius: "4px" }}
            type="date"
            value={filters?.startDate}
            max={filters.endDate ?? currentDate}
            onChange={(e) => {
              dispatch(setFilterOptions({ startDate: e.target.value }));
            }}
          />
          <Delete
            color="warning"
            onClick={() => dispatch(setFilterOptions({ startDate: null }))}
          />
        </MenuItem>
        <MenuItem>
          <label className="menu-label" htmlFor="">
            End Date
          </label>
          <input
            style={{ padding: ".4rem", borderRadius: "4px" }}
            type="date"
            value={filters?.endDate}
            min={filters?.startDate}
            max={currentDate}
            onChange={(e) => {
              dispatch(setFilterOptions({ endDate: e.target.value }));
            }}
          />
          <Delete
            color="warning"
            onClick={() => {
              dispatch(setFilterOptions({ endDate: null }));
            }}
          />
        </MenuItem> */}
        <MenuItem>
          <FormControl component="fieldset">
            <FormLabel component="legend">Payment Status</FormLabel>
            <RadioGroup
              name="paymentStatus"
              value={filters.payment === null ? "null" : filters.payment}
              onChange={(e) => {
                dispatch(
                  setFilterOptions({
                    payment: e.target.value === "null" ? null : e.target.value,
                  })
                );
              }}
            >
              <FormControlLabel
                value={"null"}
                control={<Radio />}
                label="Both"
              />
              <FormControlLabel
                value="pending"
                control={<Radio />}
                label="Pending"
              />
              <FormControlLabel value="done" control={<Radio />} label="Done" />
            </RadioGroup>
          </FormControl>
        </MenuItem>
      </Menu>
    </>
  );
};

export default TableFilterMenu;
