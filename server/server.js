const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 9000;



const publicPath = path.join(__dirname, '../public');
console.log(publicPath);
app.listen(port);