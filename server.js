const express = require('express');
const path = require('path');
const logger = require('morgan');

require('dotenv').config();
require('./config/database');

const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use(require('./config/checkToken'));

app.use('/users', require('./routes/users'));
app.use('/foodTrucks', require('./routes/foodTrucks'));
app.use('/review', require('./routes/review'));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 8080;

app.listen(port, function () {
    console.log(`Express app running on port ${port}`)
});