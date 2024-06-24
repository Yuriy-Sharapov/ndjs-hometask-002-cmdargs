#!/usr/bin/env node

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
 }

success_answer = getRandomInt(100)
console.log(success_answer)

low = success_answer - getRandomInt(70)
high = success_answer + getRandomInt(30)

console.log(`Загадано число в диапазоне от ${low} до ${high}`)

const readline = require('node:readline');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var mode = "Game"
terminal.setPrompt(`Угадайте число? \n`)
terminal.prompt();

terminal.on('line', function(answer)
{
  var current_answer = parseInt(answer);

  if (current_answer > success_answer)
    console.log(`Меньше!`);
  else if (current_answer < success_answer)
    console.log(`Больше!`);
  else if (current_answer === success_answer)
  {
    console.log(`Поздравляем! Вы угадали число!`);
    process.exit(0);
  }
  else
  {
    // Обработка неправильного ввода и досрочного выхода
    switch (mode){
        case "Game":
            terminal.setPrompt(`Хотите закончить игру (y/n)?`);
            mode = "Exit"            
            break;
        case "Exit":
            switch (answer){
                case "y":
                    console.log(`Игра закончена!`);
                    process.exit(0);
                default:
                    mode = "Game"
                    terminal.setPrompt(`Угадайте число? \n`)
                    break;                
            }
            break;
    }
  }
  terminal.prompt();

});