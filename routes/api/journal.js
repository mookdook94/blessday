// routes/api Handle the endpath for the api/journal
const express = require('express');
const router = express.Router();

const createCTRL = require = ('../../controllers/api/createjournal');

//GET API ITEMS

// GET / JOURNAL
router.get('/new', createCTRL.new);
module.exports = router;
