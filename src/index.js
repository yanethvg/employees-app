const { app } = require('./server/server');
//sequelize
const { sequelize } = require('./models/index');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  // console.log('My port: ' + port);
  sequelize.authenticate().then(() => {
    // console.log('We have conected to Database!!!!!');
  });
});
