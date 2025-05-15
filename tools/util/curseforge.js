import { CurseForgeConfig } from "../config/curseforge.js";
const CFConf = new CurseForgeConfig();

export class CurseForgeUtil {
  static makeFileRequest = async (rawMod) => {
    const headers = {
      Accept: "application/json",
      "X-Api-Key": CFConf.apiKey,
    };
    const options = {
      method: "GET",
      headers,
    };
    const url = `${CFConf.apiURL}/mods/${rawMod.projectID}/files/${rawMod.fileID}`;
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    return response.json();
  };

  static makeFilesRequest = async (modID) => {
    let output = [];
    const headers = {
      Accept: "application/json",
      "X-Api-Key": CFConf.apiKey,
    };
    const options = {
      method: "GET",
      headers,
    };
    const url = `${CFConf.apiURL}/mods/${modID}/files`;
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const json = await response.json();
    json.data.forEach((file) => {
      if (file.gameVersions.includes("Forge" && "1.12.2")) output.push(file);
    });
    return output;
  };
}
