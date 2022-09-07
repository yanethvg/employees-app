const express = require("express");
const app = express();
const { routerApi } = require('./routes');

const port = process.env.PORT || 3000;

//using middleware for seing json
app.use(express.json());

routerApi(app);


app.listen(port, () =>{
  console.log("My port: " + port);
});
