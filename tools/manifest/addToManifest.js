import manifest from "../../manifest.json" assert { type: "json" };
import fs from "fs";
import path from "path";
import PromptSync from "prompt-sync";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { CurseForgeUtil } from "../util/curseforge.js";
import { spawn } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const prompt = PromptSync();

const modID = prompt("Enter the mod ID or quit: ");
if (modID === "quit") {
  console.log("Exiting...");
  process.exit(0);
}
if (!modID.match(/^\d+$/)) {
  console.error("Invalid mod ID or no mod ID provided");
  process.exit(1);
}

await (async () => {
  try {
    const files = await CurseForgeUtil.makeFilesRequest(modID);
    console.log(`Last 10 files for ${files[0].fileName} :`);
    files.slice(0, 10).forEach((file) => {
      console.log(`- ${file.fileName} (${file.id})`);
    });
  } catch (error) {
    console.error("Error:", error);
  }
})();

const fileID = prompt("Enter the file ID or quit: ");
if (fileID === "quit") {
  console.log("Exiting...");
  process.exit(0);
}
if (!fileID.match(/^\d+$/)) {
  console.error("Invalid file ID or no file ID provided");
  process.exit(1);
}

let required = prompt("Is this mod required? (y/n): ");
if (required !== "y" && required !== "n") {
  console.error("Invalid input, please enter y or n");
  process.exit(1);
}
if (required === "y") {
  required = true;
} else {
  required = false;
}

const side = prompt("Is this mod sided? (server/client/both): ");
if (side !== "server" && side !== "client" && side !== "both") {
  console.error("Invalid input, please enter server, client or both");
  process.exit(1);
}
//TODO: check if modID and fileID are not already in the manifest

let newManifest = manifest;
newManifest.files.push({
  projectID: parseInt(modID),
  fileID: parseInt(fileID),
  ...(required ? { required: true } : {}),
  ...(side !== "both" ? { sides: [side] } : {}),
});

newManifest.files.sort((a, b) => parseInt(a.projectID) - parseInt(b.projectID));

fs.writeFileSync(
  path.join(__dirname, "../../manifest.json"),
  JSON.stringify(newManifest, null, 2),
  "utf-8"
);

console.log("Manifest updated with new mod");

const child = spawn(
  "node",
  [path.join(__dirname, "./makeReadableManifest.js")],
  {
    stdio: "inherit",
  }
);

child.on("close", (code) => {
  if (code !== 0) {
    console.error(`Child process exited with code ${code}`);
  }
});

console.log("Template manifest updated with new mod");
