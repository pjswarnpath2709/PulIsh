import { useDispatch, useSelector } from "react-redux";
import { setFilterOptions } from "../../redux/actions/ordersAction";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const TableSearchBar = () => {
  const dispatch = useDispatch();
  const { filters, loading } = useSelector((state) => state.orders);
  const [searchTerm, setSearchTerm] = useState(
    filters?.searchTerm ? filters.searchTerm : ""
  );
  const handleSearch = () => {
    dispatch(setFilterOptions({ searchTerm: searchTerm }));
  };
  return (
    <div className="search-container">
      <input
        disabled={loading}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        type="text"
        id="search-bar"
        placeholder="Name/Problem/Model/Number"
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch();
        }}
      />
      <div id="search-icon">
        <SearchIcon onClick={handleSearch} style={{ color: "gray" }} />
      </div>
    </div>
  );
};

export default TableSearchBar;
