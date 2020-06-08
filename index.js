const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const app = express();
const cors = require('cors');

require('./config/db');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }),
);

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'),
    res.setHeader('Access-Control-Allow-Credentials', 'true'),
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET,HEAD,OPTIONS,POST,PUT,DELETE',
    ),
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Access-Control-Allow-Headers,Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
    ),
    res.setHeader('Cache-Control', 'no-cache'),
    next();
});
app.use('/api', require('./routes/bookRouter'));

app.listen(port, () => {
  console.log(`Book app server listening at http://localhost:${port}`);
});
