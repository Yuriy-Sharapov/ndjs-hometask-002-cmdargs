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
    .option('month', {
        alias: "m",
        type: "boolean",
        description: "Количество месяцев, для выполнения сдвига назад" 
    })     
    .argv

if (process.argv.slice(2).length = 2
    && (process.argv.slice(2)[0] === '-m' || process.argv.slice(2)[0] === '--month') ){

        try {
            const date = new Date()
            const months_offset = Number(process.argv.slice(2)[1])
            const newDate = new Date(date.setMonth(date.getMonth() - months_offset))
            console.log(newDate)      
        }
        catch {
            console.log("Некорректный запуск команды add. Запустите sub --help")
        }
    }
else{
    console.log("Некорректный запуск команды add. Запустите sub --help")
}