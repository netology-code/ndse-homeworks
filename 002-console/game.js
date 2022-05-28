#!/usr/bin/env node

const readline = require('readline');

const rl = readline.createInterface(
    process.stdin, process.stdout);

let target = getTargetNum()
const startGame = 'Guessed the number in the range from 0 to 100';

console.log(startGame)

rl.on('line', (date) => {
    if (!isNaN(date)) {
        let userValue = parseInt(date)
        if (userValue === target) {
            victory()
        } else if (userValue > target) {
            console.log('Smaller')
        } else {
            console.log('Bigger')
        }
    } else {
        console.log('Write number')
    }
});

function victory() {
    console.log('Good job')
    console.log(startGame)
    target = getTargetNum()
}

function getTargetNum() {
    return Math.floor(Math.random() * 100)
}
