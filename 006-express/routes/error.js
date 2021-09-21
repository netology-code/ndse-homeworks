const express = require('express');
const router = express.Router();

router.get('/', function (request, response) {
    throw new Error('This is test error');
})

module.exports = router;

