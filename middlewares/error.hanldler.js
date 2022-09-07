/* eslint-disable no-unused-vars */
// middleware for catching all errors
function logErrors(err, req, res, next) {
  //midleare for errors
  next(err);
}

//middleware for doing format for the client
//showing the error
function errorHandler(err, req, res, next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

// middleware for detecting Boom Midleware
function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }
  next(err);
}

module.exports = {
  logErrors,
  errorHandler,
  boomErrorHandler,
};
