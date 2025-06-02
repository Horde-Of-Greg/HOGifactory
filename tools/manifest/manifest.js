import path from "path";
import promptSync from "prompt-sync";
import { GlobalUtil } from "../util/global.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { spawn } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const prompt = promptSync();

const filesRunnable = GlobalUtil.indexFiles(path.join(__dirname, "./"), [
  "manifest.js",
]).filter((file) => {
  return file.endsWith(".js") && !file.includes(path.join(__dirname, "./automated"));
})

filesRunnable.forEach((filePath, n) => {
  console.log(`${n + 1}: ${path.basename(filePath)}`);
});

const fileToRun = prompt("Enter the number of the script you want to run: ");
const file = filesRunnable[fileToRun - 1];
if (!file) {
  console.error("Invalid number");
  process.exit(1);
}
console.log(`Running ${path.basename(file)}`);
const child = spawn("node", [file], { stdio: "inherit" });

child.on("close", (code) => {
  if (code !== 0) {
    console.error(`Child process exited with code ${code}`);
  }
});
