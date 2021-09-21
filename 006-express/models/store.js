const Book = require('./book');

class Store {
    constructor() {
        const test = {title: 'title', description: 'description', authors: 'authors', favorite: 'favorite', fileCover: '', fileName: '', fileBook: ''}
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
        const index = this.books.findIndex(function (el) {
            return el.id === id
        })
        if (index === -1) return false;
        return this.books.splice(index, 1);
    }
}

module.exports = Store;