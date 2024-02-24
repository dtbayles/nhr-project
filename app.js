const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

/**
 * Middleware for parsing request bodies.
 *
 * @description This setup includes two middleware functions from the Express.js framework:
 * - `express.json()`: Parses incoming requests with JSON payloads, making the parsed data available under the `req.body` property.
 * - `express.urlencoded({ extended: true })`: Parses incoming requests with URL-encoded payloads, specifically handling complex objects with rich data types.
 *
 * Both middleware are essential for handling POST and PUT requests where the request body content needs to be accessed in a parsed format.
 */
app.use(express.json())
  .use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

/**
 * Middleware to log requests
 */
app.use((req, res, next) => {
  console.log(`Received a ${req.method} request to ${req.url}`);
  next();
});

const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});
