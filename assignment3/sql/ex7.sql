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

	