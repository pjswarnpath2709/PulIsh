import { isMissing } from "../helper/checks.js";
import CustomError from "./CustomError.js";

class CustomerApiFeature {
  constructor({ operator }) {
    this.operator = operator;
  }

  search = async ({ searchTerm }) => {
    if (isMissing(searchTerm)) {
      return this;
    }
    const regex = new RegExp(searchTerm, "i");
    this.operator = this.operator.find({
      $or: [{ name: regex }, { contactNumber: regex }],
    });
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

export default CustomerApiFeature;
