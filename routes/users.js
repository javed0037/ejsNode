var express = require('express');
var router = express.Router();
const axios = require('axios');
//var request = require('request');
const asyncRedis = require("async-redis");
const client = asyncRedis.createClient(6379, '139.162.242.237');
var path = require("path")

/* GET users listing. */

router.get('/', async function (req, res, next) {

  let { marketId } = req.query;

  let arr = [];
  var value = await client.get(marketId)
  if(value){
  console.log("there are the data for this id",value)
  arr.push(JSON.parse(value));
}
  var config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  };
  axios.post("http://178.79.178.166/api/?marketid=" + marketId + "&apikey=ieyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6InNoYWt0aXNoYXJtYSIsImlhd", {}, config)
    .then(response =>{
      console.log("there are the data for this url",JSON.stringify(response.data));
      let quotation =   arr;

      return res.render('index', { quotation: quotation, quotation1: response.data });
    }).catch(e => {
      console.log("threre are the error", e);
      return res.json({
        message: "something went wrong",
        error: e
      })
    })

  // res.send('respond with a resource');
});

module.exports = router;
