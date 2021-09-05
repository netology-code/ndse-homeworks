import readline from 'readline';

const input = readline.createInterface(process.stdin);

const randomInt = Math.round(Math.random() * 100);
console.log('Загадано число в диапазоне от 0 до 100');
console.log('Введите число или "exit" для завершения');

input.on('line', function (value) {
    if (value.trim() === 'exit') {
        return input.emit('close');
    }

    value = Number(value);
    if (value > randomInt) {
        console.log("Больше...");
    } else if (value < randomInt) {
        console.log("Меньше...");
    } else {
        console.log("Верно!!!");
        return input.emit('close');
    }
})

input.on('close', function (code) {
    console.log('This is the end');
    return process.exit(0);
})

