-- This SQL Script Contains the queries needed for starting the Animal Shelter database.
-- NOTE: you should have already created a blank database called Animal_Shelter. The query should look like this:
-- CREATE DATABASE Animal_Shelter;

-- @block
BACKUP DATABASE Animal_Shelter
TO DISK = "C:\Users\Chris\OneDrive\Documents\DB Backups";

-- @block 
-- Creating all of the needed tables for the data base.

CREATE TABLE Employees (
    ID int NOT NULL AUTO_INCREMENT, 
    FirstName varchar(50),
    LastName varchar(50) NOT NULL,
    Password varchar(50) NOT NULL, 
    Position ENUM('Director', 'Assistant Director', 'Employee') NOT NULL,
    PRIMARY KEY (ID)
);

-- @block 
CREATE TABLE Addresses (
    AddressID int NOT NULL AUTO_INCREMENT,
    StreetAddress varchar(255),
    City varchar(100),
    State varchar(2),
    PostalCode varchar(10),
    PRIMARY KEY (AddressID)
);

-- @block 
CREATE TABLE Customers (
    ID int NOT NULL AUTO_INCREMENT,
    FirstName varchar(50) NOT NULL,
    LastName varchar(50) NOT NULL,
    PhoneNumber varchar(10) NOT NULL,
    EmailAddress varchar(100) NOT NULL,
    StreetAddress int NOT NULL,
    PRIMARY KEY (ID),
    FOREIGN KEY (StreetAddress) REFERENCES Addresses(AddressID)
);

-- @block 
CREATE TABLE Animals (
    IntakeNumber int NOT NULL AUTO_INCREMENT,
    AnimalType ENUM('Small Animal', 'Livestock') NOT NULL,
    Name varchar(50) NOT NULL,
    Sex ENUM('Male', 'Female') NOT NULL,
    SpayNeuterStatus boolean NOT NULL,
    VaccinationStatus boolean NOT NULL,
    Age int NOT NULL,
    ReasonForStay varchar(255),
    AvailabilityDate date,
    Breed varchar(100),
    Characteristics varchar(255),
    SpecialNeeds varchar(255),
    EuthanasiaStatus boolean NOT NULL,
    CageNumber int NOT NULL,
    VetNumber varchar(10),
    AuctionStatus boolean NOT NULL,
    PRIMARY KEY (IntakeNumber)
);

-- @block 
CREATE TABLE Transactions (
    ID int NOT NULL AUTO_INCREMENT,
    Employee int NOT NULL,
    Animal int NOT NULL,
    Customer int NOT NULL,
    TransactionType ENUM('Adoption', 'Reclamation') NOT NULL,
    Amount float(10) NOT NULL,
    PRIMARY KEY (ID),
    FOREIGN KEY (Employee) REFERENCES Employees(ID),
    FOREIGN KEY (Animal) REFERENCES Animals(IntakeNumber),
    FOREIGN KEY (Customer) REFERENCES Customers(ID)
);
