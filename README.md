# org-payment-api
An API for school fees org payments

## Version 1.0

Version 1.0 is now released!

This is originally designed to be an API using restify and nodejs. However there is also a CLI based command to manipulate the data. This utilizes mongodb for database storage. For now there is no front end GUI implementation. If he ever finds time then he will implement it using angularJS or ReactJS but that is highly unlikely. So you could help out send a pull request for front end implementation :smile:

## Usage

To use

1. Install first mongodb completely.
..* Then run mongod to start the mongo database.
2. Install node js and npm
..* To check if they are installed run node -v and npm -v in your terminal or command prompt
3. Run npm install
4. Run sudo npm link
..* This will link the javascript files to cli commands.
5. Run org to start the server

## Commands

| Commands | Parameters | Description |
|----------|-----|-------------|
| org |  | Use this command before using all commands to connect to mongodb database |
| org-g-all | | Use this to get all the data in the database |
| org-g | id | Get the id of the data using search |
| org-sms | name | Search the name of the entry |
| org-add | | add an entry to the database |
| org-edit| id | edit the name, address, year-level, course of the data |
| org-pay | id | edit the payment of the entry |
| org-del | id | deletes the entry |
| org-del-all | | deletes the entire database **use with caution**|
