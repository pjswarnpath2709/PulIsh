const errorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode ?? 500;
  err.message = err.message ?? "Internal server error";
  const currentDate = new Date(Date.now()).toLocaleString();
  console.log("\x1b[33m", `[ ${currentDate} ] 😤😫🤯 :`, err);
  res.status(err.statusCode).json({
    message: err.message,
    statusCode: err.statusCode,
    success: "false",
  });
};

export default errorHandler;
