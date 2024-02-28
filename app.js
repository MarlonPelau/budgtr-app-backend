const express  = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Budget App Server")
});


app.get('*', (req, res) => {
    res.json({ error: 'Not found' })
  });

module.exports = app;