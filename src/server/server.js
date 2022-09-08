const express = require('express');
var cors = require('cors');
var cookieParser = require('cookie-parser');

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

var whitelist = ['http://localhost:8000', 'http://localhost:8080'];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(null, false);
    }
  },
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
  optionsSuccessStatus: 200,
  credentials: true,
  allowedHeaders: [
    'Content-Type',
    'Authorization',
    'X-Requested-With',
    'device-remember-token',
    'Access-Control-Allow-Origin',
    'Origin',
    'Accept',
  ],
};
app.use(cors(corsOptions));
app.use(cookieParser());

routerApi(app);

//putting after routes
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

module.exports = {
  app,
};
