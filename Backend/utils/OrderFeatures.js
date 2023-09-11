import { isMissing } from "../helper/checks.js";
import FuzzySearch from "fuzzy-search";
import { OrderStatusEnum, PaymentStatusEnum } from "../models/Order.js";
import CustomError from "./CustomError.js";

class OrderApiFeature {
  constructor({ operator }) {
    this.operator = operator;
  }

  search = async ({ searchTerm }) => {
    if (typeof searchTerm === "string" && searchTerm.trim() === "") return this;

    if (isMissing(searchTerm)) {
      return this;
    }
    const allOrders = await this.operator.clone().exec(); // Clone the original query and execute it

    // Create a new instance of the fuzzy searcher
    const searcher = new FuzzySearch(
      allOrders,
      ["model", "problemStatement", "customer.name", "customer.contactNumber"],
      {
        caseSensitive: false, // Make the search case-insensitive
      }
    );

    // Search for the given term
    const results = searcher.search(searchTerm);

    // Convert the results to an array of order IDs
    const orderIds = results.map((result) => result._id);

    // Modify the original query to filter by the found order IDs
    this.operator = this.operator
      .find({ _id: { $in: orderIds } })
      .sort({ createdAt: -1 });

    return this;
  };

  filterByOrderStatus = ({ orderStatus }) => {
    if (isMissing(orderStatus)) return this;
    if (
      orderStatus !== OrderStatusEnum.closed &&
      orderStatus !== OrderStatusEnum.open
    )
      throw new CustomError({
        message: "Invalid Order Status",
        statusCode: 400,
      });
    this.operator = this.operator
      .find({ orderStatus: orderStatus })
      .sort({ createdAt: -1 });
    return this;
  };

  filterByPaymentStatus = ({ paymentStatus }) => {
    if (isMissing(paymentStatus)) return this;
    if (
      paymentStatus !== PaymentStatusEnum.done &&
      paymentStatus !== PaymentStatusEnum.pending
    )
      throw new CustomError({
        message: "Invalid Payment Status",
        statusCode: 400,
      });
    this.operator = this.operator
      .find({ payment: paymentStatus })
      .sort({ createdAt: -1 });
    return this;
  };

  filterByDate = ({ startDate, endDate }) => {
    if (isMissing(startDate, endDate)) {
      return this;
    }
    let filter = {};
    if (!isMissing(startDate))
      filter = { ...filter, $gte: new Date(startDate) };
    if (!isMissing(endDate)) filter = { ...filter, $lte: new Date(endDate) };

    this.operator = this.operator
      .find({
        createdAt: filter,
      })
      .sort({ createdAt: 1 });
    return this;
  };

  pagination = async ({ resultsPerPage, currentPage }) => {
    const allOrdersCount = await this.operator.clone().countDocuments();
    const totalPages = Math.ceil(allOrdersCount / Number(resultsPerPage));
    if (
      currentPage < 1 ||
      currentPage > totalPages ||
      isMissing(allOrdersCount, resultsPerPage, totalPages)
    ) {
      throw new CustomError({
        message: "Invalid Page Number",
        statusCode: 400,
      });
    }
    currentPage = currentPage ?? 1;
    const skip = resultsPerPage * (currentPage - 1);
    this.operator = this.operator.limit(resultsPerPage).skip(skip);
    return this;
  };
}

export default OrderApiFeature;
