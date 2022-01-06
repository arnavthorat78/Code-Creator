import path from "path";
import fs from "fs";

import chalk from "chalk";

console.log(JSON.parse(fs.readFileSync("./templates/javascript.json", { encoding: "utf-8" })));
