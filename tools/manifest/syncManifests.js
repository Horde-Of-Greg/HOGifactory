import template from "../templates/manifest.json" assert { type: "json" };
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

template.files = template.files.map(({ name, ...rest }) => rest);

fs.writeFileSync(
  path.join(__dirname, "../../manifest.json"),
  JSON.stringify(template, null, 2),
  "utf-8"
);

console.log("Manifest synced");
