import path, {dirname} from "path";
import {fileURLToPath} from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const __rootname = path.join(__dirname, "../../");
const __buildRoot = path.join(__rootname, "temp/build/client/");

if (fs.existsSync(__buildRoot)) fs.rmSync(__buildRoot, { recursive: true } )
fs.mkdirSync(__buildRoot, { recursive: true } )

const schema = JSON.parse(fs.readFileSync(path.join(__dirname, "../configs/build_format.json"), "utf-8")).client;

function goDownTree(JSON, basePath) {
  for (const key in JSON) {
      const value = JSON[key]
      if (typeof value === "object") {
        goDownTree(value, path.join(basePath, key));
        continue;
      }
      const pathToWrite= path.join(basePath, key)
      if (key.match(/.+\..+/)) {
          fs.copyFileSync(path.join(__rootname, value), path.join(pathToWrite))
      } else {
          fs.cpSync(path.join(__rootname, value), path.join(pathToWrite), { recursive: true })
      }
  }
}
goDownTree(schema, __buildRoot)

console.log("Successfully copied client files to temp folder.")