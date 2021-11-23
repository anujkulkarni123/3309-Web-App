-- SELECT STATEMENTS --

-- Less Complex Select Statement --
SELECT
    *
FROM
    Users;

-- Complex Select Statement I --
--shows how many tools is listed by an user --
SELECT
    u.UserID
    ,Username
    ,COUNT(*) AS ToolCount
FROM
    Users u
JOIN Tools a
    ON (u.UserID = a.UserID)
GROUP BY
    u.UserID;

-- Complex Select Statement II --
--shows how many times a tool has been rented out
SELECT
    t.ToolID
    ,Count(*) AS #OfRents
FROM
    Tools a
JOIN UserTransactions t
    ON (t.ToolID = a.ToolID)
GROUP By
    t.ToolID;

-- Complex Select Statement III --
-- shows all transactions whether they're user transactions or company transactions --
SELECT
    ct.CompanyID
    ,ut.SellerID
    ,ct.BuyerID AS CompanyCustomer
    ,ut.BuyerID
    ,ct.TransactionDate AS CompanyTransactionDate
    ,ut.TransactionDate AS UserTransactionDate
FROM
    CompanyTransactions ct, UserTransactions ut;

-- Complex Selcte Statement IV --
-- allow users to search for specific tools and see information on the tool and its owner --
SELECT
	t.toolName,
    t.Price,
    t.toolType,
    u.Username,
    u.Rating
FROM
	Users u, Tools t
WHERE
	u.UserID = t.UserID


-- Complex Select Statement V --
-- shows all tools and how many users have favourited them  --
SELECT
    t.ToolName AS Tool
    ,COUNT(*) AS UsersFav
FROM
    FavouriteTools ft
    JOIN Users u
        ON (ft.UserID = u.UserID)
    JOIN Tools t
        ON (ft.ToolID = t.ToolID)
GROUP BY
    u.ToolID


-- Complex Select Statement VI --
-- shows the most popular users based on recent transactions --
SELECT
    TOP 20
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
