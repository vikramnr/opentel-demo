/*app.js*/
const express = require('express');
var https = require('https');

var options = {
    host: 'www.google.com',
    port: 443,
    path: '/upload',
    method: 'POST'
};


const PORT = parseInt(process.env.PORT || '8080');
const app = express();

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

app.get('/rolldice', (req, res) => {
    res.send(getRandomNumber(1, 6).toString());

});

app.listen(PORT, () => {
    console.log(`Listening for requests on http://localhost:${PORT}`);
});
