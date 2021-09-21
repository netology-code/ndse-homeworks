const {v4: uuid} = require('uuid');

class Book {
    constructor(fields = {}) {
        const defaultFields = {title: '', description: '', authors: '', favorite: '', fileCover: '', fileName: ''}
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

module.exports = Book

