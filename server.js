const express = require('express');
const app = express();

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar');
var rollbar = new Rollbar({
  accessToken: '640e85fdf1e045249b82d04f805115a0',
  captureUncaught: true,
  captureUnhandledRejections: true,
});

// record a generic message and send it to Rollbar
rollbar.log('Hello world!!!');

rollbar.log('work plz');

app.use(express.static(`${__dirname}/public`));

app.listen(4000, () => console.log('up on 4000'));
