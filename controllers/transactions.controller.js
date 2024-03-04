const express = require("express");

function validateForm(req, res, next) {
    if (!req.body.item_name || !req.body.amount || !req.body.category || !req.body.from)
      res.status(400).json({ message: "Invalid Inputs" });
    else next();
  }

const transactions = express.Router();
let transactionsArray = require("../models/transaction.model");

transactions.get("/", (req, res) => {
    res.json({transactions: transactionsArray});
});

transactions.get("/:id", (req, res) => {
    const {id} = req.params;
    const transaction = transactionsArray.find((transaction) => transaction.id === +id);
    res.json({transaction});
});

transactions.post("/", validateForm, (req, res) => {
    console.log(req.body)
    const newId = +transactionsArray[transactionsArray.length - 1].id+1;
    console.log(newId);
    req.body.id = newId;
    console.log(req.body);
    transactionsArray.push(req.body);
    res.json({transactions: transactionsArray});
});

transactions.put("/:id", validateForm, (req, res) => {
    const {id} = req.params;
    const transactionIndex = transactionsArray.findIndex((log) => log.id === +id);
    if(transactionIndex > -1) transactionsArray[transactionIndex] = {id:id, ...req.body};
    console.log(transactionsArray[transactionIndex]);
    res.json({transactions: transactionsArray});
});

transactions.delete("/:id", (req, res) => {
    const {id} = req.params;
    transactionsArray = transactionsArray.filter((transaction) => transaction.id !== +id);
    res.json({transactions: transactionsArray});
});

module.exports = transactions;
