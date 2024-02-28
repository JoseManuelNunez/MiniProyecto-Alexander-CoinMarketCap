const express = require('express');
const app = express();
const axios = require('axios');

app.get('/:crypto', (req, res) => {
  const crypto = req.params.crypto
  const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?symbol=${crypto}`

  axios.get({
    url: url,
    json: true,
    headers: {
      'X-CMC_PRO_API_KEY': process.env.API_KEY
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
});