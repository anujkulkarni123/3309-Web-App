// import required modules
const express = require('express');

// create the app and router
const app = express();
const router = express.Router();

// import db connection
const createConnection = require('./db/connection');

// constant variables
const port = 5000;

//
router.get('/check-conn', (req, res) => {
  const conn = createConnection();

  conn.query('SELECT 1 + 1 AS solution', function (err) {
    if (err) throw err

    res.send({ status: 'pass', message: 'db server running successfully' });
  });

  conn.end();
});

// enable app to use the router
app.use('/', router);

// start the app
app.listen(port, (err) => {
  if (err) throw err;

  // message that the server started successfully
  console.log(`express server started at https://localhost:${port}/`);
});
