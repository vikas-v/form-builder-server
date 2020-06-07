const express = require('express');
const Surveys = require('../models/surveys');
const Forms = require('../models/forms');

module.exports = () => {

  // ======
  // Create
  // ======
  const create = async (req, res) => {
    try {
      const survey = req.body;
      await Forms.updateOne({ slug: survey.slug }, { $inc: { response_count: 1 }})
      Surveys.create(survey, (e, survey) => {
        if (e) {
          console.log(e);
          res.sendStatus(500);
        } else {
          res.send(survey);
        }
      });

    } catch(e) {
      console.log(e);
      res.sendStatus(500);
    }
  };

  // ======
  // Routes
  // ======

  let router = express.Router();

  router.post('/', create);
  return router;

}