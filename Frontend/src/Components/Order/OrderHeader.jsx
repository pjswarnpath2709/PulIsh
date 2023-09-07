import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setFilterOptions } from "../../redux/actions/ordersAction";

const OrderHeader = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Pending", "Completed"];
  const dispatch = useDispatch();
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };
  useEffect(() => {
    let orderStatus = null;
    switch (activeCategory) {
      case "All":
        orderStatus = null;
        break;
      case "Pending":
        orderStatus = "open";
        break;
      case "Completed":
        orderStatus = "closed";
        break;
      default:
        orderStatus = null;
    }
    dispatch(setFilterOptions({ orderStatus: orderStatus }));
  }, [activeCategory, dispatch]);

  return (
    <header className="order-header">
      <div className="order-navigation">
        {categories.map((category, ind) => (
          <div
            key={category + ind}
            className={`category ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              handleCategoryClick(category);
            }}
          >
            {category}
          </div>
        ))}
      </div>
    </header>
  );
};

export default OrderHeader;
