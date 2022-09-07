const express = require('express');
var cors = require('cors');

const app = express();
//routes
const { routerApi } = require('../routes');
//middlewares
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('../middlewares/error.handler');

//using middleware for seing json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//cors
const whitelist = ['http://localhost:3000'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  },
};
app.use(cors(options));

routerApi(app);

//putting after routes
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

module.exports = {
  app,
};
