import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { EnvironmentConfig } from "./environment.js";

// To run locally, not in GitHub Actions
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const envConf = new EnvironmentConfig();

if (envConf.environment === "local") {
  dotenv.config({path: path.join(__dirname, "../../.env")});
}

export class CurseForgeConfig {
  constructor() {
    this.apiKeyName = "CFCORE_API_TOKEN";
    this.apiURL = "https://api.curseforge.com/v1";
    this.apiKey = process.env[this.apiKeyName];
    if (!this.apiKey) {
      throw new Error(
          `Please set the environment variable ${this.apiKeyName} to your CurseForge Core API key. \n See https://support.curseforge.com/en/support/solutions/articles/9000208346-about-the-curseforge-api-and-how-to-apply-for-a-key for more information.`
      );
    }
    this.headers = {
      Accept: "application/json",
      "X-Api-Key": this.apiKey,
    };
    this.options = {
      method: "GET",
      headers: this.headers,
    };
  }
}
