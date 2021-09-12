const fs = require('fs');
const path = require('path');
const util = require('util');
const EventEmitter = require('events');
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

const logPath = path.join(__dirname, 'log', logFileName);

if (!fs.existsSync(logPath)) {
    console.error('Такого лога не существует');
    process.exit(1);
}

const rs = fs.createReadStream(logPath);
rs.setEncoding('utf-8');

let log = '';
rs.on('data', function (chunk) {
    log += chunk;
})
rs.on('end', function () {
    log = JSON.parse(log);
    const win = log.filter(function (el) {
        return el.result;
    }).length
    console.log('Общее количество партий:', log.length);
    console.log('Выиграно / Проиграно:', win, '/', log.length - win);
    console.log('Процентное соотношение выигранных партий:', `${Math.round(100 * win / log.length)}%`);
})
