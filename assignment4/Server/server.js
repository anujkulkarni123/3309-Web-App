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

  const Select_All_Tools_Query = 'SELECT * FROM tools;';

  conn.query(Select_All_Tools_Query, (err, rows) => {
    if (err) throw err

    //could be tools: rows
    res.json({ data: rows });
  });

  conn.end();
});

// router route to get all the users
router.get('/users', (req, res) => {
  const conn = createConnection();

  // query to get all the users
  const usersQuery = 'SELECT * FROM users;';

  conn.query(usersQuery, (err, rows) => {
    if (err) throw err;

    res.json({ data: rows });
  });

  conn.end();
});

// router query to get all the companies
router.get('/companies', (req, res) => {
  const conn = createConnection();

  const companyQuery = 'SELECT * FROM companies;';

  conn.query(companyQuery, (err, rows) => {
    if (err) throw err;

    res.json({ data: rows });
  });

  conn.end();
});

// router query to get all the favourite tools
router.get('/favTools', (req, res) => {
  const conn = createConnection();

  const favQuery = 'SELECT * FROM favouritetools;';

  conn.query(favQuery, (err, rows) => {
    if (err) throw err;

    res.json({ data: rows });
  });

  conn.end();
});

// router query to get all the unavailable tools
router.get('/unavTools', (req, res) => {
  const conn = createConnection();

  const unavQuery = 'SELECT * FROM unavailabletools;';

  conn.query(unavQuery, (err, rows) => {
    if (err) throw err;

    res.json({ data: rows });
  });

  conn.end();
});

// router query to get all the user transactions
router.get('/userTransactions', (req, res) => {
  const conn = createConnection();

  const userTransQuery = 'SELECT * FROM usertransactions;';

  conn.query(userTransQuery, (err, rows) => {
    if (err) throw err;

    res.json({ data: rows });
  });

  conn.end();
});

// router query to get all the company transactions
router.get('/companyTransactions', (req, res) => {
  const conn = createConnection();

  const compTransQuery = 'SELECT * FROM companytransactions;';

  conn.query(compTransQuery, (err, rows) => {
    if (err) throw err;

    res.json({ data: rows });
  });

  conn.end();
});

// router to login user
router.get('/login', (req, res) => {
  const username = req.query.username;
  const password = req.query.password;

  const conn = createConnection();

  const query = `
    SELECT
      Username
      ,Password
    FROM
      users
    WHERE
      Username = '${username}' AND
      Password = '${password}'`;

  conn.query(query, (err, rows) => {
    if (err) throw err;

    if (rows.length === 1) {
      res.json({ message: 'Login Successful!', user: username, success: true });
    } else {
      res.send({ message: 'Login Unsuccessful!', success: false });
    }
  });

  conn.end();
});

// router query to get all the popular users
router.get('/popularUsers', (req, res) => {
  const conn = createConnection();

  const query = `
    SELECT
      Username
      ,Address
      ,Rating
      ,TransDone
    FROM
      Users u
      JOIN UserTransactions ut
        ON (u.UserID = ut.SellerID)
    ORDER BY
      TransactionDate
      ,TransDone
    LIMIT 20`;

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
