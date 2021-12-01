// import required modules
const express = require('express');

// create the app and router
const app = express();
const router = express.Router();

// import db connection
const createConnection = require('./db/connection');

// constant variables
const port = 5000;

// route to get all the tools in the database
router.get('/tools/:search', (req, res) => {
  const search = req.params.search;

  const conn = createConnection();

  conn.query(`
    SELECT
      *
    FROM
      tools
    WHERE
      ToolName LIKE '%${search}%';
    `, (err, rows) => {
    if (err) throw err

    res.json({ tools: rows });
  });

  conn.end();
});

// enable app to use the router
app.use('/', router);

// start the app
app.listen(port)

// message that the server started successfully
console.log(`express server started at http://localhost:${port}/`);
