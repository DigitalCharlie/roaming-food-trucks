const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

app.listen(port, function () {
    console.log(`Express app running on port ${port}`)
});