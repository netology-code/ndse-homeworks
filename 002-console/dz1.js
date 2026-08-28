const yargs = require('yargs/yargs');
const { hideBin
} = require('yargs/helpers');

const argv = yargs(hideBin(process.argv))
.command('current', 'Показать текущую дату и время', (yargs) => {
    return yargs
    .option('year',
    {
        alias: 'y',
        type: 'boolean',
        description: 'Показать год'
    })
    .option('month',
    {
        alias: 'm',
        type: 'boolean',
        description: 'Показать месяц'
    })
    .option('date',
    {
        alias: 'd',
        type: 'boolean',
        description: 'Показать день'
    });
})
.command('add', 'Добавить время', (yargs) => {
    return yargs
    .option('d',
    {
        type: 'number',
        description: 'Количество дней'
    })
    .option('month',
    {
        type: 'number',
        description: 'Количество месяцев'
    });
})
.command('sub', 'Вычесть время', (yargs) => {
    return yargs
    .option('d',
    {
        type: 'number',
        description: 'Количество дней'
    })
    .option('month',
    {
        type: 'number',
        description: 'Количество месяцев'
    });
})
.help()
.strict()
.demandCommand(1, 'Укажите команду: current, add или sub')
.argv;

const command = argv._[
    0
];

if (command === 'current') {
    const now = new Date();
    if (argv.year || argv.y) {
    console.log(now.getFullYear());
    } else if (argv.month || argv.m) {
    console.log(now.getMonth() + 1);
    } else if (argv.date || argv.d) {
    console.log(now.getDate());
    } else {
    console.log(now.toISOString());
    }
}

else if (command === 'add') {
    if (!argv.d && !argv.month) {
    console.log('Ошибка: укажите -d (дни) или --month (месяцы)');
    process.exit(1);
    }
    const now = new Date();
    if (argv.d) {
    if (isNaN(argv.d) || argv.d < 0) {
        console.log('Ошибка: количество дней должно быть положительным числом');
        process.exit(1);
        }
    now.setDate(now.getDate() + argv.d);
    }
    if (argv.month) {
    if (isNaN(argv.month) || argv.month < 0) {
        console.log('Ошибка: количество месяцев должно быть положительным числом');
        process.exit(1);
        }
    now.setMonth(now.getMonth() + argv.month);
    }
    console.log(now.toISOString());
}

else if (command === 'sub') {
    if (!argv.d && !argv.month) {
    console.log('Ошибка: укажите -d (дни) или --month (месяцы)');
    process.exit(1);
    }
    const now = new Date();
    if (argv.d) {
    if (isNaN(argv.d) || argv.d < 0) {
        console.log('Ошибка: количество дней должно быть положительным числом');
        process.exit(1);
        }
    now.setDate(now.getDate() - argv.d);
    }
    if (argv.month) {
    if (isNaN(argv.month) || argv.month < 0) {
        console.log('Ошибка: количество месяцев должно быть положительным числом');
        process.exit(1);
        }
    now.setMonth(now.getMonth() - argv.month);
    }
    сonsole.log(now.toISOString());
}