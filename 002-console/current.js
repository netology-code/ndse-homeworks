#!/usr/bin/env node
import yargs from 'yargs';
import {hideBin} from 'yargs/helpers';

const argv = yargs(hideBin(process.argv)).argv;

const command = argv._[0];

let day, month, year = false;

if (typeof argv.date !== 'undefined') {
    day = argv.date;
} else if (typeof argv.d !== 'undefined') {
    day = argv.d;
}
if (typeof argv.month !== 'undefined') {
    month = argv.month;
} else if (typeof argv.m !== 'undefined') {
    month = argv.m;
}
if (typeof argv.year !== 'undefined') {
    year = argv.year;
} else if (typeof argv.y !== 'undefined') {
    year = argv.y;
}

const date = new Date();

if (command === 'current') {

} else if (command === 'add' || command === 'sub') {
    if (year) {
        date.setFullYear(date.getFullYear() + (command === 'add' ? +year : -+year));
    }
    if (month) {
        date.setMonth(date.getMonth() + (command === 'add' ? +month : -+month));
    }
    if (day) {
        date.setDate(date.getDate() + (command === 'add' ? +day : -+day));
    }
} else {
    process.exit(1);
}

console.log(date.toISOString());

if (command === 'current') {
    if (argv.year || argv.y) {
        console.log('Year:', date.getFullYear())
    }
    if (argv.month || argv.m) {
        console.log('Month:', date.getMonth())
    }
    if (argv.date || argv.d) {
        console.log('Day:', date.getDate())
    }
}
process.exit(0)