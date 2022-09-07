const { app } = require('./server/server');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('My port: ' + port);
});
