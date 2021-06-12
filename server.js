const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const DataService = require("./data-service");

app.use(cors());

// Add support for incoming JSON entities
app.use(express.json());

// CORS in ExpressJS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Production mode
if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));
  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}


app.get("/api", cors(), (req, res) => {
  const url = "https://xkcd.com/info.0.json";
  DataService(url, res);
});

app.get("/api/:num", cors(), (req, res) => {
  const url = `https://xkcd.com/${req.params.num}/info.0.json`;
  DataService(url, res);
});

const port = process.env.PORT || 5000;
// Start server
app.listen(port, () => `Server running on port ${port}`);
