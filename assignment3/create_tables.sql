-- CREATE TABLE STATEMENTS --

-- Users Table --
CREATE TABLE Users (
    UserID INT AUTO_INCREMENT
    ,Username VARCHAR(50)
    ,Password VARCHAR(50)
    ,CreditCardNo VARCHAR(16)
    ,Address VARCHAR(100)
    ,Rating INT CHECK(Rating IN (1, 2, 3, 4, 5)) DEFAULT 3
    ,PRIMARY KEY (UserID)
);

-- Companies Table --
CREATE TABLE Companies (
    CompanyID INT AUTO_INCREMENT
    ,Name VARCHAR(50)
    ,Address VARCHAR(100)
    ,Rating INT CHECK(Rating IN (1, 2, 3, 4, 5))
    ,PRIMARY KEY (CompanyID)
)

-- AvailableTools Table --
CREATE TABLE AvailableTools (
    ToolID INT AUTO_INCREMENT
    ,ToolType VARCHAR(50)
    ,ToolName VARCHAR(50)
    ,UserID INT
    ,CompanyID INT
    ,Price DECIMAL(10, 2)
    ,ForSale BOOLEAN
    ,ForRent BOOLEAN
    ,PRIMARY KEY (ToolID)
    ,FOREIGN KEY (UserID)
        REFERENCES Users(UserID)
        ON DELETE CASCADE
    ,FOREIGN KEY (CompanyID)
        REFERENCES Companies(CompanyID)
        ON DELETE CASCADE
);

-- UnavialableTools Table --
CREATE TABLE UnavialableTools (
    ToolID INT
    ,UserID INT
    ,ReturnDate DATE
    ,FOREIGN KEY (ToolID)
        REFERENCES AvailableTools(ToolID)
        ON DELETE CASCADE
    ,FOREIGN KEY (UserID)
        REFERENCES Users(UserID)
        ON DELETE CASCADE
);

-- FavouriteTools Table --
CREATE TABLE FavouriteTools (
    ToolID INT
    ,UserID INT
    ,FOREIGN KEY (ToolID)
        REFERENCES AvailableTools(ToolID)
        ON DELETE CASCADE
    ,FOREIGN KEY (UserID)
        REFERENCES Users(UserID)
        ON DELETE CASCADE
);

-- UserTransactions Table --
CREATE TABLE UserTransactions (
    ToolID INT
    ,SellerID INT
    ,BuyerID INT
    ,FOREIGN KEY (ToolID)
        REFERENCES AvailableTools(ToolID)
        ON DELETE CASCADE
    ,FOREIGN KEY (SellerID)
        REFERENCES Users(UserID)
        ON DELETE CASCADE
    ,FOREIGN KEY (BuyerID)
        REFERENCES Users(UserID)
        ON DELETE CASCADE
)

-- CompanyTransaction Table --
CREATE TABLE CompanyTransactions (
    ToolID INT
    ,CompanyID INT
    ,BuyerID INT
    ,FOREIGN KEY (ToolID)
        REFERENCES AvailableTools(ToolID)
        ON DELETE CASCADE
    ,FOREIGN KEY (CompanyID)
        REFERENCES Companies(CompanyID)
        ON DELETE CASCADE
    ,FOREIGN KEY (BuyerID)
        REFERENCES Users(UserID)
        ON DELETE CASCADE
)
