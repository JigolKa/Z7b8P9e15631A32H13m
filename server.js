const express = require('express');
const path = require('path');
const wallet = require('./scripts/main.js');

const app = express();

app.get('/wheat', (req, res) => {
 res.cookie('wheat', wallet.wheatAmount).send('cookie set');
});

app.listen(3000, () => {
 console.log('Connected on port 3000!');
})