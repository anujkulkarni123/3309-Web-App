// import required modules
const express = require('express');
const cors = require('cors');

// create the app and router
const app = express();
const router = express.Router();

// import db connection
const createConnection = require('./db/connection');

// constant variables
const port = 5000;

// middlewares
app.use(cors());

// route to get all the tools in the database
router.get('/tools', (req, res) => {
  const conn = createConnection();

  const Select_All_Tools_Query = 'SELECT * FROM tools';

  conn.query(Select_All_Tools_Query, (err, rows) => {
    if (err) throw err

    //could be tools: rows
    res.json({ data: rows });
  });

  conn.end();
});

// route to get all the users
router.get('/users', (req, res) => {
  const conn = createConnection();

  // query to get all the users
  const query = 'SELECT * FROM users;';

  conn.query(query, (err, rows) => {
    if (err) throw err;

    res.json({ data: rows });
  });

  conn.end();
});

// query to get all the companies
router.get('/companies', (req, res) => {
  const conn = createConnection();

  const query = 'SELECT * FROM companies;';

  conn.query(query, (err, rows) => {
    if (err) throw err;

    res.json({ data: rows });
  });

  conn.end();
});

// enable app to use the router
app.use('/', router);

// start the app
app.listen(port);

// message that the server started successfully
console.log(`express server started at http://localhost:${port}/`);
