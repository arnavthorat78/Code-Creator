import chalk from "chalk";
/**
 * Removes the unwanted parts of the built-in NodeJS `process.argv`.
 *
 * @param lowerCase If the arguments should be converted to lower case.
 * @returns The actual parameters passed in.
 */
export function args(lowerCase = false) {
    const argv = process.argv;
    const [, , ...params] = argv;
    if (lowerCase) {
        const lower = params.map(param => param.toLowerCase());
        return lower;
    }
    return params;
}
/**
 * A horizontal line that covers the whole terminal.
 *
 * Please note that if the terminal is resized, the seperator either run short or spread over multiple lines.
 */
export function line() {
    return "-".repeat(process.stdout.columns);
}
/**
 * Show grey text with the current directory that the program ran in.
 *
 * @returns The running process styled with `chalk`.
 */
export function runProcess() {
    return chalk.gray(`\nRunning in ${chalk.bold(process.cwd())}`);
}
