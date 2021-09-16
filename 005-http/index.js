const fs = require('fs');
const path = require('path');
const http = require('http');
const yargs = require('yargs');
const {hideBin} = require('yargs/helpers');

if (typeof process.env.TOKEN === 'undefined' || typeof process.env.URL === 'undefined') {
    if (fs.existsSync(path.join(__dirname, 'config.js'))) {
        process.env = {...process.env, ...require('./config.js')};
    } else {
        console.error('Cannot find required environment variables');
        process.exit(1);
    }
}

const city = yargs(hideBin(process.argv)).argv._.join(' ');
if (!city) {
    console.error('Missed required parameter "city"');
    process.exit(2);
}
const request = http.get(`${process.env.URL}?access_key=${process.env.TOKEN}&query=${city}`, (response) => {
    const statusCode = response.statusCode

    if (statusCode !== 200) {
        console.error(`Status Code: ${statusCode}`)
        return
    }

    response.setEncoding('utf8')

    let rawData = ''
    response.on('data', (chunk) => rawData += chunk)
    response.on('end', () => {
        let parsedData = JSON.parse(rawData)
        console.log(parsedData)
        process.exit(0);
    })
})






