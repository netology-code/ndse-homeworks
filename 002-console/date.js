#!/usr/bin/env node

const yargs = require('yargs/yargs')
const {hideBin} = require('yargs/helpers')

let command = 'unknown';
const currentCommand = 'current';
const addCommand = 'add';
const subCommand = 'sub';

const currentDate = new Date();

const argv = yargs(hideBin(process.argv))
    .commands(currentCommand, `${currentCommand} command`, (yargs) => {
        command = currentCommand;
        setOptions(yargs, "boolean", currentCommand)
    })
    .commands(addCommand, `${addCommand} command`, (yargs) => {
        command = addCommand
        setOptions(yargs, addCommand)
    })
    .commands(subCommand, `${subCommand} command`, (yargs) => {
        command = subCommand
        setOptions(yargs, addCommand)
    })
    .argv

function setOptions(yargs, type, describe) {
    yargs
        .options('year', {
            alias: 'y',
            type: type,
            describe: `${describe} year`,
        })
        .options('month', {
            alias: 'm',
            type: type,
            describe: `${describe} month`
        })
        .options('date', {
            alias: 'd',
            type: type,
            describe: `${describe} date`
        })
}

function getDateByCommand() {
    if (command === currentCommand) {
        return getCurrentDate()
    } else if (command === addCommand) {
        return getChangedDate(command)
    } else if (command === subCommand) {
        return getChangedDate(command)
    } else {
        return 'Write command'
    }
}

function getChangedDate(command) {
    let changedDate = currentDate;
    if (!isNaN(argv.year)) {
        currentDate.setFullYear(changeDate(command, currentDate.getFullYear(), argv.year))
    } else if (!isNaN(argv.month)) {
        currentDate.setMonth(changeDate(command, currentDate.getMonth(), argv.month))
    } else if (!isNaN(argv.date)) {
        currentDate.setDate(changeDate(command, currentDate.getDate(), argv.date))
    }
    return changedDate;
}

function changeDate(command, date, target) {
    if (command === addCommand) {
        return date + target;
    } else if (command === subCommand) {
        return date - target;
    }
}

function getCurrentDate() {
    if (argv.year) {
        return currentDate.getFullYear()
    } else if (argv.month) {
        return currentDate.getMonth()
    } else if (argv.date) {
        return currentDate.toLocaleDateString()
    } else {
        return currentDate
    }
}

console.log(getDateByCommand());