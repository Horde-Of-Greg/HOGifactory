# NPM

Npm is a package manager for javascript, and we are running our private package here, to help for development by automating tasks, or making them easier.

To get started, make sure you are in the `/tools` directory.

After that, run

```bash
npm install
```

To set up the external packages you will need.

# Scripts

To run our scripts you will have to begin by running

```bash
npm run <entry-point>
```

Each entry point will handle a set of scripts that have similar functions. From there you will be able to run our code.

## List of entry points

### `edit-manifest`

This script handles all the tasks related to the manifest.json, this is the file where "mods are stored".

Files:

- `addToManifest.js`: This script will prompt the user to add a mod to the manifest file. You will need the Mod ID from Curseforge for this.

- `makeReadableManifest.js`: This script will fetch the name and version of each mod in the `manifest.json`, making it human readable instead of ModIDs and FileIDs which you need to look up.

- `syncManifests.json`: This script will sync the `manifest.json` to the `/template/manifest.json`, whilst removing the names of the mods. The intended use for this is to remove mods. You remove them in the template of the manifest, since it is human readable, then sync it to the actual manifest.
