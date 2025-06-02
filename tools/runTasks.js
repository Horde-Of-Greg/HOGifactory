import { EnvironmentConfig } from "./config/environment.js";
import { CurseForgeUtil } from "./util/curseforge.js";

const args = process.argv.slice(2);

switch (args[0]) {
  case "set-actions-env": // DO NOT USE THIS LOCALLY, ONLY FOR GITHUB ACTIONS
      EnvironmentConfig.setActionsEnvironment();
      console.log("Environment set to 'actions'.");
      break;
  case "set-cf-core-api-key":
      if (!args[1]) {
        console.error("Please provide a CurseForge Core API key in the args.");
        process.exit(1);
      }
      const obfuscatedKey = args[1].replace(/^.{3}(.+).{3}$/g, "*");
      console.log(`Setting CFCORE_API_TOKEN to ${obfuscatedKey}`);
      CurseForgeUtil.addLocalApiKey(args[1]);
      break;
}
