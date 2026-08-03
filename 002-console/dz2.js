const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('SIGINT', () => {
    console.log('\nДо свидания!');
    rl.close();
    process.exit(0);
});

const secret = Math.floor(Math.random() * 101);

function gameStart() {
    rl.question('', (answer) => {
    const userNumber = Number(answer);

    if (isNaN(userNumber)) {
        console.log('Введите число!');
        gameStart();
        return;
        }
    if (userNumber < 0 || userNumber > 100) {
        console.log('Число должно быть от 0 до 100');
        gameStart();
        return;
        }
    if (secret === userNumber) {
        console.log('Отгадано число', secret);
        rl.close();
        } else if (secret < userNumber) {
            console.log('Меньше');
            gameStart();
        } else {
            console.log('Больше');
            gameStart();
        }
    });
}

console.log('Загадано число в диапазоне от 0 до 100');
gameStart();