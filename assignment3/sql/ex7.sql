-- View of rows which show users and the tools they own --
CREATE VIEW searchTools(toolName, toolType, Price, Username, Rating)
AS SELECT 
	t.toolName, 
    t.Price, 
    t.toolType, 
    u.Username, 
    u.Rating
FROM
	Users u, Tools t
WHERE
	u.UserID = t.UserID;
	
  
-- View of rows which show the most popular users based on recent transactions --
CREATE VIEW popularTransactions(Username, Address, Rating, TransDone)
AS SELECT
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
    LIMIT 20;
  
CREATE VIEW UserView
AS SELECT
    UserID
    ,Username
    ,Address
    ,Rating
    ,TransDone
FROM
    Users;