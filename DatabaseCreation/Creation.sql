-- This SQL Script Contains the queries needed for starting the Animal Shelter database.
-- NOTE: you should have already created a blank database called Animal_Shelter. The query should look like this:
-- CREATE DATABASE Animal_Shelter;

-- @block
CREATE DATABASE Animal_Shelter;

-- @block
DROP DATABASE Animal_Shelter;

-- @block
BACKUP DATABASE Animal_Shelter
TO DISK = "C:\Users\Chris\OneDrive\Documents\DB Backups";

-- @block 
-- Creating all of the needed tables for the data base.
USE Animal_Shelter;

CREATE TABLE Employees (
    ID CHAR(6) NOT NULL UNIQUE, 
    FirstName varchar(50) NOT NULL,
    LastName varchar(50) NOT NULL,
    Password varchar(50) NOT NULL, 
    Position ENUM('Director', 'Assistant Director', 'Employee') NOT NULL,
    PRIMARY KEY (ID)
);
CREATE TABLE Addresses (
    AddressID int NOT NULL AUTO_INCREMENT,
    StreetAddress varchar(255),
    City varchar(100),
    State varchar(2),
    PostalCode varchar(10),
    PRIMARY KEY (AddressID)
);
CREATE TABLE Customers (
    ID int NOT NULL AUTO_INCREMENT,
    FirstName varchar(50) NOT NULL,
    LastName varchar(50) NOT NULL,
    PhoneNumber varchar(12) NOT NULL,
    EmailAddress varchar(100) NOT NULL,
    StreetAddress int NOT NULL,
    PRIMARY KEY (ID),
    FOREIGN KEY (StreetAddress) REFERENCES Addresses(AddressID)
);
CREATE TABLE Animals (
    IntakeNumber int NOT NULL AUTO_INCREMENT,
    AnimalType ENUM('Small Animal', 'Livestock') NOT NULL,
    Name varchar(50) NOT NULL UNIQUE,
    Sex ENUM('Male', 'Female') NOT NULL,
    SpayNeuterStatus boolean NOT NULL,
    VaccinationStatus boolean NOT NULL,
    Breed varchar(100),
    EuthanasiaStatus boolean NOT NULL,
    CageNumber int NOT NULL,
    VetNumber varchar(10),
    PRIMARY KEY (IntakeNumber)
);
CREATE TABLE Transactions (
    ID int NOT NULL AUTO_INCREMENT,
    Employee CHAR(6) NOT NULL,
    Animal int NOT NULL,
    Customer int NOT NULL,
    TransactionType ENUM('Adoption', 'Reclamation') NOT NULL,
    Amount DECIMAL(4,2) NOT NULL,
    PRIMARY KEY (ID),
    FOREIGN KEY (Employee) REFERENCES Employees(ID),
    FOREIGN KEY (Animal) REFERENCES Animals(IntakeNumber),
    FOREIGN KEY (Customer) REFERENCES Customers(ID)
);

-- @block
INSERT INTO employees
VALUES('W1TBRD', 'Ed', 'Newgate', '1LoveDog$', 'Assistant Director');

 -- @block
INSERT INTO Addresses(StreetAddress, City, State, PostalCode)
VALUES ('1234 Sesame Street', 'Florence', 'SC', '29505')

 -- @block
INSERT INTO CustomerS(FirstName, LastName, PhoneNumber, EmailAddress, StreetAddress)
VALUES ('TonyTony', 'Chopper', '800-867-5309', 'drchopper@gmail.com', 1)

 -- @block
INSERT INTO Animals (AnimalType, Name, Sex, SpayNeuterStatus, VaccinationStatus, 
 Breed, EuthanasiaStatus, CageNumber, VetNumber)
 VALUES ('Small Animal', 'Biscuit', 'Female', TRUE, TRUE, 'Corgi', FALSE, 3, NULL)