import fs from "fs";
import path from "path";
import { CurseForgeUtil } from "./curseforge.js";

export class GlobalUtil {
  /**
   * @description Used to index the files in a directory and its subdirectories
   * @param {String} directoryPath the path to the directory you want to index the files of
   * @param {Array} listOfFilesToIgnore an array of file names to ignore
   * @returns {Array} an array of file paths
   */
  static indexFiles(directoryPath, listOfFilesToIgnore = []) {
    let filePaths = [];
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

  /**
   * @description Used to get the mod version from the raw response made to CF for a mod's data
   * @param {number} modID the mod ID
   * @param {number} fileID the file ID of the version you want to get
   * @returns {Promise<String>} the mod version (e.g. 1.3.56)
   */
  static async getModVersion(modID, fileID) {
    const fileData = await CurseForgeUtil.fetchFileData(modID, fileID);
    let fileName = fileData.fileName;
    if (!fileName) return "";
    if (!fileName.replace(/[\d+.?]+/g, "")) return fileName;
    fileName = fileName.replace(/1\.12\.2|1\.12|\.jar/g, "");

    const list = fileName.match(/[\d+.?]+/g);
    if (!list) return fileName;
    if (list[list.length - 1] == "0") return fileName;

    return list[list.length - 1];
  }

  /**
   * @description Used to get the mod name from ID of the mod
   * @param {number} modID the mod ID
   * @returns {Promise<String>} the mod name (e.g. GregTech)
   */
  static async getModName(modID) {
    return await CurseForgeUtil.fetchModData(modID).then((info) => info.name);
  }

  static async formatModNameVer(modID, fileID) {
    if (!modID) {
      throw new Error("Mod ID is required");
    }
    if (!fileID) {
      throw new Error("File ID is required");
    }
    const name = await this.getModName(modID);
    const version = await this.getModVersion(modID, fileID);
    return `${name} ${version}`;
  }
}
