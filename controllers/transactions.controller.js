const express = require("express");



const transactions = express.Router();
const transactionsArray = require("../models/transaction.model");

transactions.get("/", (req, res) => {
    res.json({transactions: transactionsArray});
});

transactions.get("/:id", (req, res) => {
    const {id} = req.params;
    const transaction = transactionsArray.find((transaction) => transaction.id === +id);
    res.json({transaction});
});

transactions.post("/", (req, res) => {
    const newId = transactionsArray[transactionsArray - 1].id+1;
    req.body.id = newId;
    console.log(req.body);
    transactionsArray.push(req.body);
    res.json({transactions: transactionsArray});
});

transactions.put("./:id", (req, res) => {
    const {id} = req.params;
    const transactionIndex = transactionsArray.findIndex((log) => log.id === +id);
    if(transactionIndex > -1) transactionsArray[transactionIndex] = req.body;
    res.json({transactions: transactionsArray});
});

transactions.delete("./:id", (req, res) => {
    const {id} = req.params;
    transactionsArray = transactionsArray.filter((transaction) => transaction.id === +id);
    res.json({transactions: transactionsArray});
});

module.exports = transactions;
