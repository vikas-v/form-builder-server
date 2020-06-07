//models.js
const moment = require('moment');
const mongoose = require('mongoose');
const generateSlug = require('./../utils/generateSlug');

const Schema = mongoose.Schema;

// =======
// Schemas
// =======

const FormsSchema = new Schema({
    title: {
        type: String
    },
    questions: {
        type: Array,
        default: []
    },
    slug: {
        type: String,
        unique: true,
        index: true
    },
    response_count: {
        type: Number,
        default: 0
    },
    created: { type: Date, default: Date.now }
  },
  { strict: false }
);

FormsSchema.pre('save', function (next) {
    let form = this;
    let slug_part = generateSlug();
    let full_slug_part = form.title.replace('/', '-').replace(' ', '-') + ':' + slug_part;  
    form.slug = full_slug_part;
    next();
});

const Forms = mongoose.model('forms', FormsSchema);
module.exports = Forms