const boom = require('@hapi/boom');

function validatorHandler(schema, property) {
  //dinamic middleware
  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      next(boom.badRequest(error));
    }
    //continue with the job
    next();
  };
}

module.exports = {
  validatorHandler,
};
