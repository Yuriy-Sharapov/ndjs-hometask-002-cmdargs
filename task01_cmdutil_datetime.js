#!/usr/bin/env node

const yargs = require('yargs/yargs')            // Подключаем пакет yargs для работы
const { hideBin } = require('yargs/helpers')    // Подключаем хелпер - это сокращение от process.argv.slice(2)

const argv = yargs(hideBin(process.argv))       // Обрабатываем аргументы
    .option('params1', {
        alias: "p1",
        type: "boolean",
        description: "params 1 descr" 
    })
    .option('params2', {
        alias: "p2",
        type: "string",
        description: "params 2 descr", 
        default: "def params 2"
    })
    .argv

console.log(argv)
