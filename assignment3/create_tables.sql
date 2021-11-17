-- CREATE TABLE STATEMENTS --

-- Users Table --
CREATE TABLE Users (
    UserID INT AUTO_INCREMENT
    ,Username VARCHAR(50)
    ,Password VARCHAR(50)
    ,CreditCardNo VARCHAR(16)
    ,Address VARCHAR(100)
    ,Rating INT CHECK(Rating IN (1, 2, 3, 4, 5))
    ,PRIMARY KEY (UserID)
);

-- Tool Table --
CREATE TABLE AvailableTools (
    ToolID INT AUTO_INCREMENT
    ,UserID INT
    ,PRIMARY KEY (ToolID)
);
