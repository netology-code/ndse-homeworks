const express = require('express');
const Store = require('./store');

const store = new Store();

const app = express();
app.use(express.json());

app.post('/api/user/login', function (request, response) {
    return response.status(201).json({id: 1, mail: 'test@mail.ru'})
})

app.get('/', function (request, response) {
    return response.send('<h1>Hello World</h1>');
})

app.get('/api/books', function (request, response) {
    return response.json({result: store.select()});
})

app.get('/api/books/:id', function (request, response) {
    const book = store.select(request.params.id);
    if (book) {
        return response.json({result: book})
    }
    return response.status(404).json({result: 'error', message: 'Error 404 Not Found'})
})

app.post('/api/books', function (request, response) {
    return response.json({result: store.add(request.body)})
})

app.put('/api/books/:id', function (request, response) {
    const book = store.update(request.params.id, request.body);
    if (book) {
        return response.json({result: book})
    }
    return response.status(404).json({result: 'error', message: 'Error 404 Not Found'})
})

app.delete('/api/books/:id', function (request, response) {
    const result = store.delete(request.params.id);
    if (result) {
        return response.json({result: 'OK'})
    }
    return response.status(404).json({result: 'false', message: 'Error 404 Not Found'})
})

const PORT = process.env.port || 3000;
app.listen(PORT);