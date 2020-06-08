const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const app = express();

require('./config/db');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', require('./routes/bookRouter'));

app.listen(port, () => {
    console.log(`Book app server listening at http://localhost:${port}`)
});