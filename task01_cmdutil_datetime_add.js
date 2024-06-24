#!/usr/bin/env node

// Функции добавления дней
Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

const yargs = require('yargs/yargs')            // Подключаем пакет yargs для работы
const { hideBin } = require('yargs/helpers')    // Подключаем хелпер - это сокращение от process.argv.slice(2)

const argv = yargs(hideBin(process.argv))       // Обрабатываем аргументы
    .option('date', {
        alias: "d",
        type: "boolean",
        description: "Количество дней, для выполнения сдвига вперед" 
    })     
    .argv

if (process.argv.slice(2).length = 2
    && (process.argv.slice(2)[0] === '-d' || process.argv.slice(2)[0] === '--date')){

        try {
            const days_offset = Number(process.argv.slice(2)[1])
            console.log((new Date()).addDays(days_offset).toISOString())            
        }
        catch {
            console.log("Некорректный запуск команды add. Запустите add --help")
        }
    }
else{
    console.log("Некорректный запуск команды add. Запустите add --help")
}