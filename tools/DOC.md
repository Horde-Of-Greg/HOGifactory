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

## List of manual commands
These commands are meant to be run manually, and are not automated. They're here to facilitate development and debugging. 

Any command here interfacing with a template file is how you should edit the main files. But you should NOT edit the main files directly, or your commit will be rejected by the CI.

### `edit-manifest`

This script handles all the tasks related to the manifest.json, this is the file where "mods are stored". Run this script and you will be prompted with a menu of options to choose from.
Many of these need a Curseforge API key set locally, which you can set by running `npm run set-cf-api-key`. Contact a member of the Horde of Greg if you need help with this.

Options:

- `addToManifest`: This script will prompt the user to add a mod to the manifest file. You will need the Mod ID from Curseforge for this. The rest of the information will be fetched automatically.

- `makeReadableManifest`: This script will fetch the name and version of each mod in the `~/manifest.json`, making it human readable instead of ModIDs and FileIDs which you need to look up.
There isn't really a reason to run this anymore, since the template files are already created now, but it is still here for debugging purposes, archival and as a reset switch if you messed up the template files.

### `set-cf-api-key <api-key>`

This is simply to add your CF API key to a local .env file in the correct format.

## List of automated commands
These commands are meant to be run automatically, and are not meant to be run manually. You can run them manually for debugging purposes, but you should not commit what they output. These will all follow the format `a-<task>`.

- `a-sync-manifest`: This script will sync the `~/manifest.json` to the `./templates/manifest.json`, whilst removing the names of the mods.
- `a-actions-env`: This script simply changes the "environment" field in `./tools/configs/environment.json` to "actions" instead of "local". There is never any reason to run this locally.