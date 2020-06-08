// ===============
// Database Config
// ===============
const mongoose = require('mongoose');
const config = require('./');
mongoose.connect(config.db_url, {useNewUrlParser: true});
