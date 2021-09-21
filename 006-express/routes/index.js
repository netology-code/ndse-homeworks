const express = require('express');
const router = express.Router();

router.get('/', function (request, response) {
    return response.send('<h1>Hello World</h1>');
})

module.exports = router;