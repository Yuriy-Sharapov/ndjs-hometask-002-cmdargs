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

console.log(new Date())
