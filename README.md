# Node Express Handlebars

### Overview

In this assignment, you'll create a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!). Be sure to follow the MVC design pattern; use Node and MySQL to query and route data in your app, and Handlebars to generate your HTML.

### Read This

When trying to connect remotely to your Heroku database on an open network such as a coffee shop, library, or even your University WiFi, it will be blocked. If you are experiencing a Heroku connection error, this could be why.

### Before You Begin

- Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.

- Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured.

- Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.

- Your app will store every burger in a database, whether devoured or not.

- [Check out this video of the app for a run-through of how it works](https://youtu.be/msvdn95x9OM).

#### App Setup

1. Created a GitHub repo called `burger` and clone it to your computer.

2. Made a package.json file by running `npm init` from the command line.

3. Installed the Express npm package: `npm install express`.

4. Created a server.js file.

5. Installed the Handlebars npm package: `npm install express-handlebars`.

6. Installed MySQL npm package: `npm install mysql`.

7. Required the following npm packages inside of the server.js file:
   - express

#### DB Setup

1. Inside your `burger` directory, create a folder named `db`.

2. In the `db` folder, create a file named `schema.sql`. Write SQL queries this file that do the following:

   - Create the `burgers_db`.
   - Switch to or use the `burgers_db`.
   - Create a `burgers` table with these fields:
     - **id**: an auto incrementing int that serves as the primary key.
     - **burger_name**: a string.
     - **devoured**: a boolean.

3. Still in the `db` folder, create a `seeds.sql` file. In this file, write insert queries to populate the `burgers` table with at least three entries.

4. Run the `schema.sql` and `seeds.sql` files into the mysql server from the command line

5. Now you're going to run these SQL files.

   - Make sure you're in the `db` folder of your app.

   - Start MySQL command line tool and login: `mysql -u root -p`.

   - With the `mysql>` command line tool running, enter the command `source schema.sql`. This will run your schema file and all of the queries in it -- in other words, you'll be creating your database.

   - Now insert the entries you defined in `seeds.sql` by running the file: `source seeds.sql`.

   - Close out of the MySQL command line tool: `exit`.

#### Directory structure

All the recommended files and directories from the steps above should look like the following structure:

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│  
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```
