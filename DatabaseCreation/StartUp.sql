-- This allows the app to connect to database without a password.
-- Since this app is running locally, there is minimal risk of data integrity issues
use mysql;
ALTER USER 'root'@'localhost' IDENTIFIED BY '';

-- this creates the animal shelter data base
