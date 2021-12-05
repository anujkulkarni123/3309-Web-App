// import required modules
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

// create the app and router
const app = express();
const router = express.Router();

// import db connection and other functions
const createConnection = require('./db/connection');
const { registerUser, insertTool, getUserDetails } = require('./db/asyncFunctions');

// constant variables
const port = 5000;

// variable to store the user

// middlewares
app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000'
}));
app.use(cookieParser());

// router middlewares
router.use(express.urlencoded({
  extended: true
}));
router.use(express.json());

// route to get all the tools in the database
router.get('/tools', (req, res) => {
  const conn = createConnection();
  conn.connect();

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
  conn.connect();

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
  conn.connect();

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
  conn.connect();

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
  conn.connect();

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
  conn.connect();

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
  conn.connect();

  const compTransQuery = 'SELECT * FROM companytransactions;';

  conn.query(compTransQuery, (err, rows) => {
    if (err) throw err;

    res.json({ data: rows });
  });

  conn.end();
});

// router to login user
router.post('/login', (req, res) => {
  // check if user is logged in
  if (req.cookies.user) {
    res.json({ loggedIn: true });
    return;
  }

  const username = req.body.username;
  const password = req.body.password;

  const conn = createConnection();
  conn.connect();

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
      // use cookies to store user
      res.cookie('user', username, {
        maxAge: 60 * 60 * 1000, // 1 hour
        httpOnly: false,
        secure: false
      })
      res.send({message: 'Login Successful!', success: true});
    } else {
      res.send({ message: 'Login Unsuccessful!', success: false });
    }
  });

  conn.end();
});

// router to register a user (runs and insert query)
router.post('/register', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const cardNo = req.body.cardNo;
  const address = req.body.address;

  // check if the password input is proper
  if (!username || !password) {
    res.json({message: 'Invalid Username and/or Password!', success: false});
    return;
  }

  // async method to register user imported
  registerUser(username, password, cardNo, address)
    .then((response) => {
      if (response.success) {
        // use cookies to store user
        res.cookie('user', username, {
          maxAge: 60 * 60 * 1000, // 1 hour
          httpOnly: false,
          secure: false
        }).json(response);
        return;
      }
      res.json(response);
    })
    .catch((err) => {
      console.log(err);
      res.json({ message: err.message, success: false });
    });
});

// router to insert a new tool (runs and insert query)
router.post('/insertTool', (req, res) => {
  const toolname = req.body.toolname;
  const toolprice = req.body.toolprice;
  const tooltype = req.body.tooltype;
  const username = req.body.username;

  // async method to insert tool imported
  insertTool(toolname, toolprice, tooltype, username)
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      console.log(err);
      res.json({ message: err.message, success: false });
    });
});

// router query to get all the popular users
router.get('/popularUsers', (req, res) => {
  const conn = createConnection();
  conn.connect();

  const query = `
    SELECT
      Username
      ,Address
      ,Rating
      ,TransDone
      ,ut.TransactionDate
    FROM
      users u
      JOIN usertransactions ut
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

// route to get info on a tool and its user
router.get('/tools/:id', (req, res) => {
  // get the params
  const UserID = parseInt(req.params.id);

  const conn = createConnection();
  conn.connect();

  const query = `
    SELECT
      ToolID
      ,ToolName
      ,ToolType
      ,Price
      ,ForSale
      ,ForRent
      ,Username
      ,Address
    FROM
      tools t
    JOIN users u
      ON (t.UserID = u.UserID)
    WHERE
      t.ToolID = ${UserID}
  `;

  conn.query(query, (err, rows) => {
    if (err) {
      res.json({ row: {} });
    }
    res.json({ row: rows[0] });
  });

  conn.end()
});

// route to get info on a tool and its user
router.get('/users/:id', (req, res) => {
  // get the params
  const UserID = parseInt(req.params.id);

  const conn = createConnection();
  conn.connect();

  const query = `
    SELECT
      ToolID
      ,ToolName
      ,ToolType
      ,Price
      ,ForSale
      ,ForRent
      ,Username
      ,Address
    FROM
      tools t
    JOIN users u
      ON (t.UserID = u.UserID)
    WHERE
      t.ToolID = ${UserID}
  `;

  conn.query(query, (err, rows) => {
    if (err) {
      res.json({ row: {} });
    }
    res.json({ row: rows[0] });
  });

  conn.end()
});

// route to get details of one user
router.get('/user/:username', (req, res) => {
  const username = req.params.username;

  getUserDetails(username)
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.json({ data: {} });
    });
});

router.get('/tools/:column', (req, res) => {
  const column = req.params.column;

  const conn = createConnection();
  conn.connect();

  conn.query(`
      SELECT
        *
      FROM
        tools
      ORDER BY
        ${column}
    `, (err, rows) => {
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
