import fs from "fs";
import path from "path";

export class GlobalUtil {
  static indexFiles(directoryPath, listOfFilesToIgnore = []) {
    const filePaths = [];
    const directoryEntries = fs.readdirSync(directoryPath, {
      withFileTypes: true,
    });
    for (const directoryEntry of directoryEntries) {
      const fullPath = path.join(directoryPath, directoryEntry.name);
      if (directoryEntry.isDirectory()) {
        filePaths.push(...this.indexFiles(fullPath, listOfFilesToIgnore));
      }
      if (!listOfFilesToIgnore.includes(directoryEntry.name)) {
        filePaths.push(fullPath);
      }
    }
    return filePaths;
  }
}
