import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const template = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../../templates/manifest.json"), "utf-8")
);
const version = fs.readFileSync(path.join(__dirname, "../../../.manifest-version-lock.txt")).toString();
const newVersion = version.split(".").fill((parseInt(version.split(".")[1]) + 1).toString(), 1, 2).join(".");

template.files = template.files.map(({ name, ...rest }) => rest);
template.version = newVersion;

fs.writeFileSync(
    path.join(__dirname, "../../../manifest.json"),
    JSON.stringify(template, null, 2),
    "utf-8"
);

fs.writeFileSync(
    path.join(__dirname, "../../../.manifest-version-lock.txt"),
    newVersion,
    "utf8"
);

console.log("Manifest synced");
