import chalk from "chalk";
import ora from "ora";
import prompts from "prompts";

import path from "path";
import util from "util";
import fs from "fs";

import { line, args } from "./functions/helpers.js";

const readFile = util.promisify(fs.readFile);

/**
 * This command is used to start a new project!
 */
async function start() {
	console.log(
		chalk.bold(
			`You've started a new project in ${
				chalk.red("Code ") + chalk.green("Creator")
			}, so let's start!\n`
		)
	);

	if (!args(true)[1]) {
		/**
		 * Start command that can be used repeatedly.
		 */
		const startCommand = chalk.bold.blueBright(
			`${chalk.green("code-creator")} start ${chalk.red("<folder>")}`
		);

		console.log(
			chalk.bold.red("Error: You must include the directory of where to start the project.")
		);
		console.log(`Run the following command to make a new project: ${startCommand}\n`);

		console.log(chalk.grey(`Exited program due to error`));

		return;
	}

	const directory = path.join(process.cwd(), args(true)[1]);

	console.log(`Directory parsed: ${chalk.bold(directory)}`);

	let response: prompts.Answers<"value">;

	async function getConfirmation(): Promise<boolean> {
		response = await prompts({
			type: "text",
			name: "value",
			message: `Is the path above what you were expecting? ${
				chalk.green("Y") + "/" + chalk.red("n")
			}`,
			validate: (value: string) =>
				value.toLowerCase() === "y" || value.toLowerCase() === "n"
					? true
					: `Please enter either ${chalk.green("Y") + " or " + chalk.red("n")}`,
		});

		if (response.value === "n") {
			console.log(
				chalk.bold.yellow(
					`Warning: It looks like you aren't happy with the parsed path. Please try and run the command again with your preffered path.`
				)
			);
			console.log(
				chalk.gray(
					"Please note that the path parses relatively to your current working directory (e.g. C:\\ + C:\\ = C:\\c:\\)."
				)
			);

			return false;
		}

		return true;
	}

	const accepted = await getConfirmation();
	if (!accepted) {
		return;
	}

	console.log(line());

	const javascript = chalk.yellowBright(
		`1)  ${chalk.bold(
			"JavaScript"
		)} - A dynamic programming language used to design web applications, along with HTML and CSS.`
	);
	const typescript = chalk.blueBright(
		`2)  ${chalk.bold(
			"TypeScript"
		)} - A superset of JavaScript, including type definitions and more! Used for creating websites.`
	);
	const nodejs = chalk.green(
		`3)  ${chalk.bold("Node.js")} - A version of JavaScript, designed to run in the backend.`
	);

	console.log("There are multiple projects available, which one would you like?");
	console.log(`${javascript}\n${typescript}\n${nodejs}`);

	const projects = [
		{
			number: 1,
			name: "JavaScript",
			file: "../../templates/javascript.json",
		},
		{
			number: 2,
			name: "TypeScript",
			file: "../../templates/typescript.json",
		},
		{
			number: 3,
			name: "Node.js",
			file: "../../templates/nodejs.json",
		},
	];

	let project: number;
	async function projectType() {
		const projectInner = await prompts({
			type: "number",
			name: "project",
			message: `What project do you want to create? ${chalk.bold(`(1-${projects.length})`)}`,
			validate: (value: number) =>
				value < 1 || value > projects.length
					? `Only 1-${projects.length} is accepted`
					: true,
		});

		return projectInner.project;
	}

	project = await projectType();

	console.log(`You've selected ${chalk.bold("Project " + project)}!`);

	console.log(line());

	console.log(chalk.bold("Starting creation..."));

	ora({
		text: "Loading file contents...",
		spinner: "aesthetic",
		color: "red",
	}).start();

	const selectedProject = projects[project - 1];
	const selectedProjectPath = path.join(process.argv[1], selectedProject.file);
	let fileContents = null;

	try {
		fileContents = JSON.parse(await readFile(selectedProjectPath, { encoding: "utf8" }));

		console.log(fileContents);
	} catch (error) {
		console.log(error);
	}
}

export default start;
