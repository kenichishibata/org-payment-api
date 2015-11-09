# org-payment-api
An API for school fees org payments

##Version 0.5.1
Added PUT

TO PUT

```
localhost:3000/user/kenichi?name=kenichi1&studentNumber=1223453333336&course=compsci&yearLevel=i&address=legazpi&organizationalFee=unpaid&contribution=100&sportsFee=1453&partyFee=1million&specialFee1=special1&specialFee2=spec2
```


## Version 0.5

Version 0.5 is now released! No one is using this. I'm just doing this for fun. Maybe someone will if there is actually a frontend. Anyway. I made the server using restify and we can call this using POSTMAN (or curl if you are feeling brave) for GET POST and DELETE PUT.
This still runs mongodb in your local machine. So you need it to be installed first :) and obviously node. If you started the server first without starting the database you need to run the database and then restart it. Sorry havent made swagger file for this. I will do it in version 1.0 I promise :).

## Version 0.5

Version 0.5 is now released! No one is using this. I'm just doing this for fun. Maybe someone will if there is actually a frontend. Anyway. I made the server using restify and we can call this using POSTMAN (or curl if you are feeling brave) for GET POST and DELETE PUT.
This still runs mongodb in your local machine. So you need it to be installed first :) and obviously node. If you started the server first without starting the database you need to run the database and then restart it. Sorry havent made swagger file for this. I will do it in version 2.0 I promise :).

This uses M(V)C approach without the View (since we are doing API). Model is the services mongodb.js (DAO)
The directory for restify server:
```
index.js
config/
  development/
node_modules/
routes/
services/
controllers/
```
Other libs are for use by NPM link type server not the restify server.

To use

```
mongod
npm install
node index (or if you have nodemon instaled use nodemon index)
```
The server should be running and saying something like
```
[nodemon] 1.8.1
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node index index.js`
[2015-11-09T00:45:00.297Z]  INFO: org-payment/1450 on m-FR15080001JP.local: enabling CORS
Server started.
[2015-11-09T00:45:00.394Z]  INFO: org-payment/1450 on m-FR15080001JP.local: org-payment listening at http://[::]:3000

```
To GET all
```
localhost:3000/user (postman)
```

To GET one
```
localhost:3000/user/name (exact match)
```

TO POST
```
localhost:3000/user?name=ken&studentNumber=123456&course=compsci&yearLevel=i&address=legazpi&organizationalFee=unpaid&contribution=100&sportsFee=1453&partyFee=1million&specialFee1=special1&specialFee2=spec2
```
TO DEL
```
localhost:3000/user/name (exact match)
```

TO SEARCH
```
localhost:3000/user/search/partialname
```
TO PUT

```
Not yet implemented
```


## Version 0.1

Version 0.1 is now released!

This is a npm link type server (terminal type server not meant for front end implementation not an API)

This is originally designed to be an API using restify and nodejs. However there is also a CLI based command to manipulate the data. This utilizes mongodb for database storage. For now there is no front end GUI implementation. If he ever finds time then he will implement it using angularJS or ReactJS but that is highly unlikely. So you could help out send a pull request for front end implementation :smile:

## Usage

To use

1. Install first mongodb completely.
* Then run mongod to start the mongo database.
2. Install node js and npm
* To check if they are installed run node -v and npm -v in your terminal or command prompt
3. Run npm install
4. Run sudo npm link
* This will link the javascript files to cli commands.
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
