// import required modules
const express = require('express');

// create the app and router
const app = express();
const router = express.Router();

// constant variables
const port = 5000;

// enable app to use the router
app.use('/', router);

// start the app
app.listen(port, (err) => {
  if (err) throw err;

  // message that the server started successfully
  console.log(`express server started at https://localhost:${port}/`);
});
