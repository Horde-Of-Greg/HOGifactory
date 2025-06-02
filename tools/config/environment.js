import fs from "fs";
import path from "path";
import {fileURLToPath} from "url";
import {dirname} from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const configFile = JSON.parse(fs.readFileSync(path.join(__dirname, "../configs/environment.json"), "utf-8"));

export class EnvironmentConfig {
    constructor() {
        this.environment = configFile.environment;
    }

    static setActionsEnvironment() {
        configFile.environment = "actions";
        fs.writeFileSync(
            path.join(__dirname, "../configs/environment.json"),
            JSON.stringify(configFile, null, 2),
            "utf-8"
        );
    }
}