// ===============
// Database Config
// ===============
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/form-builder', {useNewUrlParser: true});
