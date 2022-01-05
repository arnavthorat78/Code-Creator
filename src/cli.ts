#!/usr/bin/env node

// import path from "path"
// import fs from "fs";

import chalk from "chalk";

import { args, line } from "./functions/helpers.js";

import help from "./help.js";

function normal() {
    console.log(chalk.bold(chalk.red("Code"), chalk.green("Creator")));

    console.log(chalk.bold(`\nWelcome to Code Creator! Use this handy tool for quickly making code templates to start a project!`));

    console.log(line());

    /**
     * Help code that can be used repeatedly.
     */
    const helpCode = chalk.bold.blueBright(`${chalk.green("code-creator")} help`);
    /**
     * Start code that can be used repeatedly.
     */
    const startCode = chalk.bold.blueBright(`${chalk.green("code-creator")} start ${chalk.red("<folder>")}`);
    console.log(`To get started, try typing ${helpCode} for useful commands!\nOr even better, type ${startCode} to start a new project!`);

    console.log(chalk.gray(`\nRunning in ${chalk.bold(process.cwd())}`));
}

function run() {
    const params = args(true);

    if (!params.length) {
        normal();
    } else if (params[0] === "help") {
        help();
    }
}

run();

// console.log(path.join(process.cwd(), "./test"));
