# Comics Bookstore Online App

This application is designed for Cyber City Comics store which is aiming at a transformation from offline mode to online. It is delivered by the React frontend and the Node Express backend to realize the functionality.

Key Words: React.js, Node.js, Express.js

Heroku App: https://sleepy-wave-18180.herokuapp.com/
## Objective
Create a web server hosted on Heroku that serves web pages that display xkcd web comic strips.

## Requirements Completed List
● Use the xkcd API (see https://xkcd.com/json.html)

● Has to be hosted on Heroku

● Display 1 comic strip per page

● Buttons to navigate to the previous and next comic strip

● Display the date of when the comic strip was created

● Ability to navigate to a specific comic strip by including a comic # in the URL

● Parse transcript from API into a more readable format & display on the page

● Has to be done in Node.js (and other Node.js frameworks if necessary) 

● Style accordingly with CSS

Bonus:

● A random button that goes to a random comic strip

● Each comic page has a counter that displays the amount of times this specific comic strip has been viewed on the site

## Quick Start

```bash
# Install dependencies for server
npm install

# Install dependencies for client
npm run client-install

# Run the client & server with concurrently
npm run dev

# Alternative way: 
# Run the Express server only
npm run server

# Run the React client only
npm run client

# Server runs on http://localhost:5000 and client on http://localhost:3000
```

## Author
Lilian Shi

## License
This project is licensed under the ISC License