const inquirer = require("inquirer");
const chalk = require("chalk");
const figlet = require("figlet");
const shell = require("shelljs");

const initializeGame = () => {
  let board = ['____ ____ ____\n', '____ ____ ____\n', '____ ____ ____\n'];
  console.log(
    `${board}`
  );
}


const run = async () => {
  console.log('Tic Tac Toe')
  initializeGame();
};

run();