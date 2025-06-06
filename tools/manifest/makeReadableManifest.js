import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { GlobalUtil } from "../util/global.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const originalManifest = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../../manifest.json"), "utf-8")
);

(async () => {
  await Promise.all(
    originalManifest.files.map(async (modEntry) => {
      modEntry.name = await GlobalUtil.formatModNameVer(
        modEntry.projectID,
        modEntry.fileID
      );
    })
  );

  fs.writeFileSync(
    path.join(__dirname, "../templates/manifest.json"),
    JSON.stringify(originalManifest, null, 2),
    "utf-8"
  );
})();

console.log("Manifest updated");
