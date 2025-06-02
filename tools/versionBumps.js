import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const args = process.argv.slice(2);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const manifest = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../manifest.json"), "utf-8")
);

//switch (args[0])
    //case manifest
        const version = fs.readFileSync(path.join(__dirname, "../.manifest-version-lock.txt")).toString();
        const newVersion = version.split(".").fill((parseInt(version.split(".")[1]) + 1).toString(), 1, 2).join(".");

        manifest.version = newVersion

        fs.writeFileSync(
            path.join(__dirname, "../manifest.json"),
            JSON.stringify(manifest, null, 2),
            "utf-8"
        );

        fs.writeFileSync(
            path.join(__dirname, "../.manifest-version-lock.txt"),
            newVersion,
            "utf8"
        );
        // break;