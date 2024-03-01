const express  = require("express");

const app = express();
const cors = require("cors");
const transactionsController = require("./controllers/transactions.controller");
const transactions = require("./controllers/transactions.controller");

app.use(cors());
app.use(express.json());
app.use("/api/transactions", transactionsController);

// Routes below
app.get("/", (req, res) => {
    res.send("Budget App Server")
});

app.get("./transactions", (req, res) => {
    res.json({transactions});
});

app.get("/transactions/:index", (req, res) => {
    const {index} = req.params
    if (transactions[index]) {
        res.status(200).json({transaction: transactions[index]})
    } else {
        res.status(400).json({message: `no transactions exist at this endpoint ${index}`})
    }
});

app.use((req, res, next) => {
    res.status(404).json({ error: 'Resource not found' });
  });

app.get('*', (req, res) => {
    res.json({ error: 'Not found' })
  });

module.exports = app;