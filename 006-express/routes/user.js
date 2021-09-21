const express = require('express');
const router = express.Router();

router.post('/login', function (request, response) {
    return response.status(201).json({id: 1, mail: 'test@mail.ru'})
})

module.exports = router;

