import chalk from "chalk";
import { line } from "./functions/helpers.js";
/**
 * The help command to run when a user types in the `help` command.
 */
function help() {
    console.log(chalk.bold(`You asked for help in ${chalk.red("Code ") + chalk.green("Creator")}, and we're giving you the commands!\n`));
    console.log(chalk.gray(`Key:
    - ${chalk.green("Green")} is for a used command
    - ${chalk.red("Red")} is for popular commands
    - ${chalk.blue("Blue")} is for other commands`));
    console.log(line());
    /**
     * The table of commands. Looks like below:
     *
     * +───────────────+──────────────────────────────+─────────────────────────────────────+
     * | Title         | Command                      | Description                         |
     * +───────────────+──────────────────────────────+─────────────────────────────────────+
     * | Help          | code-creator help            | Get all of the commands available!  |
     * | Start         | code-creator start <folder>  | Start a new project.                |
     * | Introduction  | code-creator                 | Starting command.                   |
     * |               |                              |                                     |
     * |               |                              |                                     |
     * |               |                              |                                     |
     * |               |                              |                                     |
     * |               |                              |                                     |
     * |               |                              |                                     |
     * +───────────────+──────────────────────────────+─────────────────────────────────────+
     */
    const table = `+───────────────+──────────────────────────────+─────────────────────────────────────+
| ${chalk.bold("Title")}         | ${chalk.bold("Command")}                      | ${chalk.bold("Description")}                         |
+───────────────+──────────────────────────────+─────────────────────────────────────+
| ${chalk.green("Help")}          | code-creator help            | Get all of the commands available!  |
| ${chalk.red("Start")}         | code-creator start <folder>  | Start a new project.                |
| ${chalk.blue("Introduction")}  | code-creator                 | Starting command.                   |
|               |                              |                                     |
|               |                              |                                     |
|               |                              |                                     |
|               |                              |                                     |
|               |                              |                                     |
|               |                              |                                     |
+───────────────+──────────────────────────────+─────────────────────────────────────+`;
    console.log(table);
}
export default help;
