const inquirer = require("inquirer");
const chalk = require("chalk");
const figlet = require("figlet");
const shell = require("shelljs");

const initializeGame = () => {
  let boardStatus = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]

  let board = ['____ ____ ____\n', '____ ____ ____\n', '____ ____ ____\n'];
  console.log(
    `${board}`
  );
}

const updateBoard = () => {

}


const run = async () => {
  console.log('Tic Tac Toe')
  initializeGame();
};

run();