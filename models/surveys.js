//models.js
const moment = require('moment');
const mongoose = require('mongoose');
const generateSlug = require('./../utils/generateSlug');

const Schema = mongoose.Schema;

// =======
// Schemas
// =======

const SurveysSchema = new Schema({
    user_name: {
        type: String
    },
    answers: {
        type: Array,
        default: []
    },
    slug: {
        type: String
    },
    created: { type: Date, default: Date.now }
  },
  { strict: false }
);

const Surveys = mongoose.model('surveys', SurveysSchema);
module.exports = Surveys