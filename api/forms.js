const express = require('express');
const Forms = require('../models/forms');

module.exports = () => {

  // ======
  // Create
  // ======
  const create = (req, res) => {
    const newEntry = req.body;
    Forms.create(newEntry, (e, newEntry) => {
      if (e) {
        console.log(e);
        res.sendStatus(500);
      } else {
        res.send(newEntry);
      }
    });
  };

  // =========
  // Fetch all Forms
  // =========
  const fetchForms = (req, res) => {
    try {
      let query = res.locals.query || {};

      Forms.find(query, (e, result) => {
        if (e) {
          console.log(e.message);
          res.status(500).send(e);
        } else {
          res.send(result);
        }
      });

    } catch (e) {
      res.status(500).send(e);
    }
  };

  // ========
  // Read one
  // ========
  const fetchForm = (req, res) => {
    const { slug } = req.params;
    Forms.findOne({ slug }, (e, result) => {
      if (e) {
        res.status(500).send(e);
        console.log(e.message);
      } else {
        res.send(result);
      }
    });
  };

  // ======
  // Routes
  // ======

  let router = express.Router();

  router.post('/', create);
  router.get('/', fetchForms);
  router.get('/:slug', fetchForm);
  return router;

}