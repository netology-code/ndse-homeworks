const express = require('express');
const {v4: uuid} = require('uuid');

class Book {
    constructor(fields = {}) {
        const defaultFields = {title: '', description: '', authors: '', favorite: '', fileCover: '', filename: ''}
        this.id = uuid();
        Object.keys(defaultFields).forEach(function (key) {
            if (typeof fields[key] !== 'undefined')
                this[key] = fields[key]
            else
                this[key] = defaultFields[key];
        }.bind(this))
    }

    update(fields = {}) {
        console.log('Book.update()', this, fields)
        Object.keys(fields).forEach(function (key) {
            if (key === 'id') return false;
            if (typeof this[key] !== 'undefined')
                this[key] = fields[key];
        }.bind(this))
        return this;
    }
}

const test = {title: 'title', description: 'description', authors: 'authors', favorite: 'favorite', fileCover: 'fileCover', filename: 'filename'}

class Store {
    constructor() {
        this.books = [];
        this.add(test);
        this.add(test);
    }

    select(id = null) {
        console.log('Store.select()', id)
        if (id === null) return this.books;

        const index = this.books.findIndex(function (el) {
            return el.id === id
        });
        if (index !== -1) {
            return this.books[index];
        }
        return false;
    }

    add(fields) {
        console.log('Store.add()', fields)
        const book = new Book(fields);
        this.books.push(book);
        return book;
    }

    update(id, fields) {
        console.log('Store.update()', id, fields)
        const book = this.select(id);
        if (book) {
            return book.update(fields);
        }
        return false;
    }

    delete(id) {
        const book = this.select(id);
        const index = this.books.findIndex(function (el) {
            return el.id === id
        })
        if (index === -1) return false;
        return this.books.splice(index, 1);
    }
}

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
    return response.status(404).json({result: 'error', message: '404 | Not Found'})
})

app.post('/api/books', function (request, response) {
    return response.json({result: store.add(request.body)})
})

app.put('/api/books/:id', function (request, response) {
    const book = store.update(request.params.id, request.body);
    if (book) {
        return response.json({result: book})
    }
    return response.status(404).json({result: 'error', message: '404 | Not Found'})
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