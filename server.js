'use strict';

const express = require('express');

// Constants
const PORT = 8079;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hey homies - testing');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
