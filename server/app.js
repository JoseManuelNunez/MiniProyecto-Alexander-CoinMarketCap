const express = require('express');
const app = express();
const request = require('request');
const dotenv = require('dotenv');
dotenv.config();

app.get('/:crypto', (req, res) => {
  const crypto = req.params.crypto
  const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?symbol=${crypto}`
  
  request.get({
    url: url,
    json: true,
    headers: {
      'X-CMC_PRO_API_KEY': "fc2a0fa3-3db3-4cc5-83e7-d1424d93d4fd"
    }
  }, (error, response, data) => {
    
    if (error) {
      return res.send({
        error: error
      });
    }
    
    res.send({
      data: data
    });
    
  });
  
});


app.listen(3000, () => {
  console.log('Server listening on port 3000');
  console.log(process.env.API_KEY)
});