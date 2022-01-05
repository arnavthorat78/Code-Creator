/**
 * Removes the unwanted parts of the built-in NodeJS `process.argv`.
 * 
 * @param lowerCase If the arguments should be converted to lower case.
 * @returns The actual parameters passed in.
 */
export function args(lowerCase = false): string[] {
    const argv = process.argv;
    const [,, ...params] = argv;

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
export function line(): string {
    return "-".repeat(process.stdout.columns);
}
