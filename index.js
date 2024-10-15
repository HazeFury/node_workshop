import "dotenv/config";
import chalk from "chalk";

console.log(chalk.blue(process.env.NAME_1));
console.log(chalk.red(process.env.NAME_2));
console.log(chalk.yellow(process.env.NAME_3));
console.log(chalk.green(process.env.NAME_4));
