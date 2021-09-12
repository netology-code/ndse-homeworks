const fs = require('fs');
const path = require('path');
const util = require('util');
const EventEmitter = require('events');
const readline = require('readline');
const yargs = require('yargs/yargs');
const {hideBin} = require('yargs/helpers');

let logFileName = 'default.json';
const argv = yargs(hideBin(process.argv)).argv;

if (argv._[0]) {
    logFileName = String(argv._[0]);
    if (!/\.json$/.test(logFileName)) {
        logFileName += '.json';
    }
}
const log = [];

console.log('Введите число от 1 до 2 или "exit" для завершения');
const input = readline.createInterface(process.stdin);

input.on('line', function (value) {
    value = value.trim();
    if (value === 'exit') {
        return input.emit('close');
    }
    if (value !== '1' && value !== '2') {
        console.log('Недопустимое значение');
        return console.log('Введите число от 1 до 2 или "exit" для завершения');
    }

    const coin = 1 + Math.round(Math.random());

    value = Number(value);
    if (value === coin) {
        console.log(`Верно!!! ${value}`);
        log.push({coin: coin, result: true});
        saveLog();
    } else {
        console.log(`Не верно!!! ${value}`);
        log.push({coin: coin, result: false});
        saveLog();
    }
    return console.log('Введите число от 1 до 2 или "exit" для завершения');
})

input.on('close', function (code) {
    console.log('This is the end');
    return process.exit(0);
})

function saveLog() {
    // console.log('Запись в лог...');
    fs.mkdir(path.join(__dirname, 'log'), function (err) {
        // console.log('Создание каталога...');
        if (err && err.code !== 'EEXIST') throw err;
        // console.log('Каталог logs существует');
    })
    fs.writeFile(path.join(__dirname, 'log', logFileName), JSON.stringify(log), {encoding: 'utf8'}, function (err) {
        if (err) throw err;
        // console.log('Лог успешно сохранен');
    })
}



