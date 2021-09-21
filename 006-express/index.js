const express = require('express');
const indexRouter = require('./routes/index.js');
const booksRouter = require('./routes/books.js');
const errorRouter = require('./routes/error.js');
const userRouter = require('./routes/user.js');
const errorMiddleware = require('./middleware/error');

express()
    .use('/api/user', userRouter)
    .use('/api/books', booksRouter)
    .use('/public', express.static(__dirname + '/public'))
    .use('/err', errorRouter)
    .use('/', indexRouter)
    .use(errorMiddleware)
    .use(express.json())
    .listen(process.env.port || 3000);