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
JOIN AvailableTools a
    ON (u.UserID = a.UserID)
GROUP BY
    u.UserID;

-- Complex Selcte Statement II --
--shows how many times a tool has been rented out
SELECT
    t.ToolID
    ,Count(*) AS #OfRents
FROM
    AvailableTools a
JOIN UserTransactions t
    ON (t.ToolID = a.ToolID)
GROUP By
    t.ToolID;

-- Complex Selcte Statement III --
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
-- shows all tools and how many users have favourited them --



-- Complex Selcte Statement V --
-- show all unavailable tools and when will they be available again and who's currently renting it out and when did they start renting it out  --



-- Complex Selcte Statement VI --
-- lists the rating in decending order for all users and companies --




-- Complex Selcte Statement VII --
-- find a tool and all the companies and users that have it available for rent --
