#!/usr/bin/env node

const yargs = require('yargs/yargs')            // Подключаем пакет yargs для работы
const { hideBin } = require('yargs/helpers')    // Подключаем хелпер - это сокращение от process.argv.slice(2)

const argv = yargs(hideBin(process.argv))       // Обрабатываем аргументы
    .option('year', {
        alias: "y",
        type: "boolean",
        description: "Текущий год" 
    })
    .option('month', {
        alias: "m",
        type: "boolean",
        description: "Текущий месяц" 
    }) 
    .option('date', {
        alias: "d",
        type: "boolean",
        description: "Дата в календарном месяце" 
    })     
    .argv

if (process.argv.slice(2).length === 0){
    console.log(new Date().toISOString())
}
else {
    process.argv.slice(2).forEach(element => {
        switch (element) {
            case "-y":
                console.log(new Date().getFullYear());
                break;
            case "-m":
                console.log(new Date().getMonth());
                break;
            case "-d":
                console.log(new Date().getDate());
                break;                
        }
    })
}