var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import chalk from "chalk";
import prompts from "prompts";
import path from "path";
import { args } from "./functions/helpers.js";
/**
 * This command is used to start a new project!
 */
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(chalk.bold(`You've started a new project in ${chalk.red("Code ") + chalk.green("Creator")}, so let's start!\n`));
        if (!args(true)[1]) {
            /**
              * Start command that can be used repeatedly.
              */
            const startCommand = chalk.bold.blueBright(`${chalk.green("code-creator")} start ${chalk.red("<folder>")}`);
            console.log(chalk.bold.red("Error: You must include the directory of where to start the project."));
            console.log(`Run the following command to make a new project: ${startCommand}\n`);
            console.log(chalk.grey(`Exited with status code ${chalk.red.bold("1")}`));
            process.exitCode = 1;
        }
        const directory = path.join(process.cwd(), args(true)[1]);
        console.log(`Directory parsed: ${chalk.bold(directory)}`);
        let response;
        function getConfirmation() {
            return __awaiter(this, void 0, void 0, function* () {
                response = yield prompts({
                    type: "text",
                    name: "value",
                    message: `Is the path above what you were expecting? ${chalk.green("Y") + "/" + chalk.red("n")}`,
                    validate: (value) => value.toLowerCase() === "y" || value.toLowerCase() === "n" ? true : `Please enter either ${chalk.green("Y") + " or " + chalk.red("n")}`
                });
                if (response.value === "n") {
                    console.log(chalk.bold.yellow(`Warning: It looks like you aren't happy with the parsed path. Please try and run the command again with your preffered path.`));
                    console.log(chalk.gray("Please note that the path parses relatively to your current working directory (e.g. C:\\ + C:\\ = C:\\c:\\)."));
                    process.exit(0);
                }
            });
        }
        ;
        yield getConfirmation();
    });
}
export default start;
