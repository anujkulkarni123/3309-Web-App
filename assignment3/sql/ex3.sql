-- INSERT STATEMENTS --

-- Insert Statement for Users Table - VERSION I --
INSERT INTO Users VALUES (
    NULL
    ,'amani'
    ,'jimbeam'
    ,'0584573226377491'
    ,'3085 Kuhl Avenue, Atlanta, GA, 30305'
    ,4
);

-- Insert Statement for Users Table - VERSION II --
INSERT INTO Users (
    Username
    ,Password
    ,CreditCardNo
    ,Address
    ,Rating
) VALUES (
    NULL
    ,'jayson'
    ,'Allen@03'
    ,'4080336091246025'
    ,'1779 Windy Ridge Road, Fort Wayne, IN, 46804'
    ,3
);

-- Insert Statement for Users Table - VERSION III --
INSERT INTO UnavialableTools (
    ToolID
    ,UserID
    ,ReturnDate
) (
    SELECT
        ToolID
        ,UserID
        ,DATE_ADD(CURDATE(), INTERVAL 10 DAY) AS ReturnDate
    FROM
        Tools
    WHERE
        ToolID = 1
);
