const express = require('express'); // importing a CommonJS module
const helmet = require("helmet");

const hubsRouter = require('./hubs/hubs-router.js');

const server = express();

// middleware
server.use(express.json());
server.use(helmet()); // Helmet helps you secure your Express apps by setting various HTTP headers. 


// routing
server.use('/api/hubs', hubsRouter);

server.get('/', (req, res, next) => {
  res.send(`
    <h2>Lambda Hubs API</h2>
    <p>Welcome to the Lambda Hubs API</p>
    `);
});

module.exports = server;
