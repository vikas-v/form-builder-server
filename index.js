// Imports
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('./config/db');

// Initial Config
const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API
const formsApi = require('./api/forms')();
const surveysApi = require('./api/surveys')();

app.use('/api/forms/', formsApi);
app.use('/api/surveys/', surveysApi);

// Server
app.listen(port, () => console.log(`Listening on port ${port}`));