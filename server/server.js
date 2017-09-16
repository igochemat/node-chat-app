const express = require('express');
const path = require('path');
const http = require('http');

const port = process.env.PORT || 3000;
const publicPath = path.resolve(__dirname, 'public');
const app = express();

app.use(express.static(publicPath));

app.listen(port, () => {
  console.log(`Server is on at ${port}`);
});
