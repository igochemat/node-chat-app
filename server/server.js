const express = require('express');
const path = require('path');
const http = require('http');

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(publicPath));

// app.get('/', (req, res) => {
//   res.send('/index');
// });

app.listen(port, () => {
  console.log(`Server is on at ${port}`);
});
