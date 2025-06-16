function notFound(req, res, next) {
  res.status(404).json({ message: "Resource not fount" });
}

function errorHandler(err, req, res, next) {
  res.status(500).json({ message: "Internal server error", error: err });
}

module.exports = { notFound, errorHandler };
