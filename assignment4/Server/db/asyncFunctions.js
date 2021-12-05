// import necessary modules
const util = require('util');
const createConnection = require('./connection');

// async function to register user if it does not exist
async function registerUser(username, password, cardNo, address) {
  const conn = createConnection();
  conn.connect();

  const query = util.promisify(conn.query).bind(conn);

  try {
    const users = await query(`SELECT * FROM users`);

    for (let user of users) {
      if (user.Username === username) {
        return {message: 'Username Taken!', success: false};
      }
    }

    // inserts user if the block of code above didn't return
    await query(`
      INSERT INTO users (Username, Password, CreditCardNo, Address) VALUES (
        '${username}'
        ,'${password}'
        ,${ cardNo.length === 16 ? `'${cardNo}'` : null}
        ,'${address}'
      )
    `);
    return {message: 'Successfully added user!', success: true};
  } catch (e) {
    throw e;
  } finally {
    conn.end();
  }
}

// async function to insert new tool
async function insertTool(toolname, toolprice, tooltype, username, sale, rent) {
  const conn = createConnection();
  conn.connect();

  const query = util.promisify(conn.query).bind(conn);

  try {
    const user = await query(`SELECT UserID FROM users WHERE Username = '${username}'`);

    console.log(user);
    if (user.length !== 1) {
      return {message: 'Invalid Credentials', success: false};
    }

    await query(`
      INSERT INTO tools (ToolName, UserID, Price, ToolType, ForSale, ForRent) VALUES (
        '${toolname}'
        ,${user[0].UserID}
        ,'${toolprice}'
        ,'${tooltype}'
        ,${sale}
        ,${rent}
      )
    `);
    return {message: 'Successfully added tool!', success: true};
  } catch (e) {
    throw e;
  } finally {
    conn.end();
  }
}

// async function to get data of user and all the users tools
async function getUserDetails(username) {
  const conn = createConnection();
  conn.connect();

  const query = util.promisify(conn.query).bind(conn);

  try {
    const user = await query(`SELECT * FROM users WHERE username = '${username}'`);
    const tools = await query(`SELECT * FROM tools WHERE UserID = ${user[0].UserID}`);

    console.log(user[0]);
    console.log(tools);

    const data = {
      user: user[0],
      tools: tools
    }

    return { data: data };
  } catch (e) {
    throw e;
  } finally {
    conn.end();
  }
}

// async function to favorite a tool
async function addFav(username, ToolID) {
  const conn = createConnection();
  conn.connect();

  const query = util.promisify(conn.query).bind(conn);

  try {
    // getting user
    const user = await query(`SELECT UserID FROM users WHERE Username='${username}'`);

    // add the transaction to the usertransactions table
    await query(`INSERT INTO favouritetools (UserID, ToolID) VALUES (
      ${user[0].UserID}
      ,${ToolID}
    )`);

    return { message: 'Successfully Inserted Tool', success: true };
  } catch (e) {
    throw e;
  } finally {
    conn.end();
  }
}

// async function to buy a tool
async function buyTool(username, ToolID) {
  const conn = createConnection();
  conn.connect();

  const query = util.promisify(conn.query).bind(conn);

  try {
    // getting user
    const user = await query(`SELECT UserID FROM users WHERE Username='${username}'`);

    // add the transaction to the usertransactions table
    await query(`INSERT INTO usertransactions (BuyerID, ToolID, TransactionDate) VALUES (
      ${user[0].UserID}
      ,${ToolID}
      ,CURDATE()
    )`);

    // remove the tool from the tools table
    await query(`DELETE FROM tools
      WHERE
        UserID = ${user[0].UserID} AND
        ToolID = ${ToolID}
    `);

    return { message: 'Transaction was successful', success: true };
  } catch (e) {
    throw e;
  } finally {
    conn.end();
  }
}

// async function to rent a tool
async function rentTool(username, ToolID, days) {
  const conn = createConnection();
  conn.connect();

  // make days a valid int
  days = Math.ceil(days);

  const query = util.promisify(conn.query).bind(conn);

  try {
    // getting user
    const user = await query(`SELECT UserID FROM users WHERE Username='${username}'`);

    // add the transaction to the usertransactions table
    await query(`INSERT INTO usertransactions (BuyerID, ToolID, TransactionDate) VALUES (
      ${user[0].UserID}
      ,${ToolID}
      ,CURDATE()
    )`);

    // remove the tool from the tools table
    await query(`DELETE FROM tools
      WHERE
        UserID = ${user[0].UserID} AND
        ToolID = ${ToolID}
    `);

    // add the tool to the unavailabletools table
    await query(`INSERT INTO unavailabletools (UserID, ToolID, ReturnDate) VALUES (
      (SELECT UserID WHERE Username = '${username}')
      ,${ToolID}
      ,DATE_ADD(CURDATE(), INTERVAL ${days} DAY)
    )`);

    return { message: `Successfully rented the tool for ${days} days!`, success: true };

  } catch (e) {
    throw e;
  } finally {
    conn.end();
  }
}

// export the functions
module.exports = {
  registerUser: registerUser,
  insertTool: insertTool,
  getUserDetails: getUserDetails,
  addFav: addFav,
  buyTool: buyTool,
  rentTool: rentTool
}
