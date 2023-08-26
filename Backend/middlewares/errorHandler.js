const errorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode ?? 500;
  err.message = err.message ?? "Internal server error";
  console.log("\x1b[33m", "😤😫🤯 :", err);
  res.json({
    message: err.message,
    statusCode: err.statusCode,
    success: "false",
  });
};

export default errorHandler;
