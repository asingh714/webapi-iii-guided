const express = require("express"); // importing a CommonJS module
const helmet = require("helmet");

const hubsRouter = require("./hubs/hubs-router.js");

const server = express();

// middleware
function bouncer(req, res, next) {
  res.status(404).json("These are not the droids you're looking for");
}

function teamer(req, res, next) {
  req.team = "Web XVII";
  next(); // go ahead and execute the next middleware/route handler
}

function getPass(req, res, next) {
  let now = new Date();
  let seconds = now.getSeconds();
  if (seconds % 3 === 0) {
    res.status(403).json("YOU SHALL NOT PASS!");
  }
  next();
}

// server.use(bouncer);
server.use(express.json());
server.use(helmet()); // Helmet helps you secure your Express apps by setting various HTTP headers.
// server.use(teamer);
// server.use(getPass);

// routing
server.use("/api/hubs", hubsRouter);

server.get("/", restricted, (req, res) => {
  res.send(`
    <h2>Lambda Hubs API</h2>
    <p>Welcome ${req.team} to the Lambda Hubs API</p>
    `);
});

function restricted(req, res, next) {
  const password = req.headers.password;

  if (password === "mellon") {
    next();
  } else {
    res.status(401).send("YOU SHALL NOT PASS")
  }

}

module.exports = server;
