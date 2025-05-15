import originalManifest from "../../manifest.json" assert { type: "json" };
import fs from "fs";
import path from "path";
import { CurseForgeUtil } from "../util/curseforge.js";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function updateManifest() {
  const jobs = originalManifest.files.map(async (rawMod) => {
    const json = await CurseForgeUtil.makeFileRequest(rawMod);
    rawMod.name = json.data.fileName;
  });
  await Promise.all(jobs);

  fs.writeFileSync(
    path.join(__dirname, "../templates/manifest.json"),
    JSON.stringify(originalManifest, null, 2),
    "utf-8"
  );
}

updateManifest();
console.log("Manifest updated");
