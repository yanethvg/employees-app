const express = require('express');
const app = express();
//routes
const { routerApi } = require('./routes');
//middlewares
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/error.hanldler');

const port = process.env.PORT || 3000;

//using middleware for seing json
app.use(express.json());

routerApi(app);

//putting after routes
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('My port: ' + port);
});
