var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/comparelayback', function (req, res, next) {
  let quotation = [{
    "dimension": 0,
    "currency": "RMB",
    "quantity": "100",
    "price": "3",
    "factory": "rx"
  },
  {
    "dimension": 0,
    "currency": "RMB",
    "quantity": "200",
    "price": "4",
    "factory": "rx"
  },
  {
    "dimension": 1,
    "currency": "RMB",
    "quantity": "100",
    "price": "3",
    "factory": "rx"
  },
  {
    "dimension": 1,
    "currency": "RMB",
    "quantity": "200",
    "price": "5",
    "factory": "rx"
  },
  {
    "dimension": 0,
    "currency": "RMB",
    "quantity": "100",
    "price": "1.2",
    "factory": "hsf"
  },
  {
    "dimension": 0,
    "currency": "RMB",
    "quantity": "200",
    "price": "2.4",
    "factory": "hsf"
  },
  {
    "dimension": 1,
    "currency": "RMB",
    "quantity": "100",
    "price": "3",
    "factory": "hsf"
  },
  {
    "dimension": 1,
    "currency": "RMB",
    "quantity": "200",
    "price": "4.5",
    "factory": "hsf"
  }]
  res.render('index', { quotation: quotation });
});

module.exports = router;
