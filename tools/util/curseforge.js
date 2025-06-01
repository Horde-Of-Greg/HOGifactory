import { CurseForgeConfig } from "../config/curseforge.js";
const CFConf = new CurseForgeConfig();

export class CurseForgeUtil {
  /**
   * @description Make a file request for a given mod and file.
   * @param {number} modID The mod ID
   * @param {number} fileID The file ID of the mod
   * @returns {Promise<Object>} A promise resolving to the file data as a JSON object.
   */
  static fetchFileData = async (modID, fileID) => {
    const url = `${CFConf.apiURL}/mods/${modID}/files/${fileID}`;
    const response = await fetch(url, CFConf.options);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const json = await response.json();
    return json.data;
  };

  /**
   * @description Make a request for all the given mod's data.
   * @param {number} modID The mod ID
   * @returns {Promise<Object>} A promise resolving to all the file's data as a JSON object.
   */
  static fetchModData = async (modID) => {
    const url = `${CFConf.apiURL}/mods/${modID}/`;
    const response = await fetch(url, CFConf.options);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const json = await response.json();
    return json.data;
  };
  /**
   * @description Make a request for all the given mod's files.
   * @param {number} modID The mod ID
   * @returns {Promise<Object>} A promise resolving to all the file's data as a JSON object.
   */
  static fetchAllFilesData = async (modID) => {
    const url = `${CFConf.apiURL}/mods/${modID}/files`;
    const response = await fetch(url, CFConf.options);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const json = await response.json();
    return json.data;
  };

  /**
   * @description Add a local API key to the environment variables.
   * @param {string} apiKey The CurseForge Core API key to add.
   */
  static addLocalApiKey = (apiKey) => {
    if (!apiKey) {
      throw new Error("API key is required");
    }
    // TODO: Validate the API key format
    process.env[CFConf.apiKeyName] = apiKey;
  };
}
