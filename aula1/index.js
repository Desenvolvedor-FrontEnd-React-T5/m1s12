// console.log(typeof window, typeof process);

const prompt = require("prompt-sync")();
const chalk = require("chalk");

const resposta = prompt("Quantos países sediaram a Copa de 2026? ");
console.log(chalk.bold.yellow("Você respondeu:" + resposta));

if (Number(resposta) === 3) {
  console.log(chalk.green("Você acertou!"));
} else {
  console.log(chalk.red("Você errou!"));
}
