import { QuestBook } from "#types/bqQuestBook.ts";
import fs from "fs";
import {
  cfgPath,
  emptyQuest,
  id,
  name,
  stringifyQB,
  stripRewards,
} from "#tasks/helpers/actionQBUtils.ts";
import { input, select } from "@inquirer/prompts";
import { SourceOption } from "#types/actionQBTypes.ts";
import logInfo, { logError, logWarn } from "#utils/log.ts";
import upath from "upath";
import { rootDirectory } from "#globals";
import colors from "colors";
import { isEnvVariableSet } from "#utils/util.ts";
import * as core from "@actions/core";
import lodash from "lodash";
import checkSpacesAndFormatting from "./checksFormatting.ts";

export const check = async () => {
  try {
    await checkAndFix(true);
  } catch (e) {
    if (isEnvVariableSet("GITHUB_STEP_SUMMARY")) {
      const summary = core.summary
        .addHeading("Quest Book Format Error!", 2)
        .addRaw(
          "Run the below Command in your Local Clone to Format the Quest Book:",
          true,
        )
        .addCodeBlock("npm run gulp fixQB");

      if (e instanceof Error) summary.addDetails("Details...", e.message);

      await summary.write();
    }
    throw e;
  }
};
export const fix = () => checkAndFix(false);

async function checkAndFix(shouldCheck: boolean) {
  logInfo(colors.bold(`${shouldCheck ? "Checking" : "Fixing"} QB...`));
  let checkQB: QuestBook;

  if (shouldCheck) {
    const qb = await fs.promises.readFile(
      upath.join(rootDirectory, cfgPath),
      "utf-8",
    );

    checkQB = JSON.parse(qb) as QuestBook;
  } else {
    checkQB = JSON.parse(
      await fs.promises.readFile(
        upath.join(
          rootDirectory,
          cfgPath,
        ),
        "utf-8",
      ),
    );
  }

  logInfo(colors.bold("Processing QB..."));
  await checkAndFixQB(shouldCheck, checkQB, false);
  if (!shouldCheck) {
    logInfo("Saving...");
    const qb = stringifyQB(checkQB);
    await Promise.all([
      fs.promises.writeFile(upath.join(rootDirectory, cfgPath), qb),
    ]);
  } else logInfo(colors.green("Successful. No Formatting Errors!"));
}

async function checkAndFixQB(
  shouldCheck: boolean,
  qb: QuestBook,
  isExpert: boolean,
) {
  let index = 0;
  // Use if Should Check is false, so we don't modify the underlying object.
  const newQB = shouldCheck
    ? qb["questDatabase:9"]
    : lodash.cloneDeep(qb["questDatabase:9"]);

  // Checks for Quests
  logInfo("Checking Quests...");
  for (const questKey of Object.keys(qb["questDatabase:9"])) {
    // Copy Quest if Should Check is false (So we don't modify the underlying object)
    const quest = shouldCheck
      ? qb["questDatabase:9"][questKey]
      : { ...qb["questDatabase:9"][questKey] };

    const foundID = id(quest);

    // Check for Missing Quests
    while (foundID > index) {
      if (shouldCheck) throw new Error(`Missing Quest at Index ${index}!`);
      logWarn(`Adding Empty Quest at Index ${index}...`);
      const newQuest = { ...emptyQuest };
      newQuest["questID:3"] = index;
      newQB[`${index}:10`] = newQuest;
      index++;
    }

    index++;

		// Check Name Formatting
		quest["properties:10"]["betterquesting:10"]["name:8"] =
			checkSpacesAndFormatting(
				shouldCheck,
				name(quest),
				foundID,
				"Quest",
				"Name",
			);

    // Check for Empty Descriptions (Trim first, might be a space)
    if (!quest["properties:10"]["betterquesting:10"]["desc:8"].trim()) {
      if (shouldCheck) {
        throw new Error(`Quest with ID ${foundID} has Empty Description!`);
      }

			quest["properties:10"]["betterquesting:10"]["desc:8"] = await input({
				message: `Quest with ID ${foundID} and Name ${quest["properties:10"]["betterquesting:10"]["name:8"]} has an Empty Description! What should we Replace it With?`,
				default: "No Description",
				validate: (value) => Boolean(value.trim()),
			});
		}
		// Check Desc Formatting (Still check if after, as user may have entered dupe formatting)
		quest["properties:10"]["betterquesting:10"]["desc:8"] =
			checkSpacesAndFormatting(
				shouldCheck,
				quest["properties:10"]["betterquesting:10"]["desc:8"],
				foundID,
				"Quest",
				"Description",
			);

    const trimmed = quest["properties:10"]["betterquesting:10"]["desc:8"]
      .trim();

    // Check if Description is Trimmed (Still check if after, as user may have entered new lines)
    if (quest["properties:10"]["betterquesting:10"]["desc:8"] !== trimmed) {
      if (shouldCheck) {
        throw new Error(
          `Quest with ID ${foundID} has Excess Spaces/New Lines in the Description!`,
        );
      }

      logWarn(`Trimming Description of Quest with ID ${foundID}!`);
      quest["properties:10"]["betterquesting:10"]["desc:8"] = trimmed;
    }

    // Visibility Check
    if (
      quest["properties:10"]["betterquesting:10"]["visibility:8"] === "NORMAL"
    ) {
      if (shouldCheck) {
        throw new Error(`Quest with ID ${foundID} has Visibility Normal!`);
      }

      quest["properties:10"]["betterquesting:10"]["visibility:8"] =
        await select({
          message:
            `Quest with ID ${foundID} has Visibility Normal! What should we Replace it With?`,
          choices: [
            {
              name: "Always",
              value: "ALWAYS",
            },
            {
              name: "Chain",
              value: "CHAIN",
            },
            {
              name: "Hidden",
              value: "HIDDEN",
            },
            {
              name: "Unlocked",
              value: "UNLOCKED",
            },
          ],
        });
    }

    // Check the Order of Prerequisites
    const oldPrerequisites = shouldCheck
      ? quest["preRequisites:11"]
      : [...quest["preRequisites:11"]]; // Copy if Changing

    let rightOrder = true;
    let prev: number = -1; // Smallest ID is 0
    for (let i = 0; i < oldPrerequisites.length; i++) {
      const pre = oldPrerequisites[i];
      if (prev < pre) {
        prev = pre;
        continue;
      }
      if (prev === pre) {
        if (shouldCheck) {
          throw new Error(
            `Duplicate Prerequisites in Quest with ID ${foundID}!`,
          );
        }
        logWarn(
          `Removing Duplicate Prerequisite in Quest with ID ${foundID}...`,
        );
        quest["preRequisites:11"].splice(i, 1);
      }
      rightOrder = false;
      break;
    }

    // Sort Prerequisites if Needed
    if (!rightOrder) {
      if (shouldCheck) {
        throw new Error(
          `Prerequisites in Quest with ID ${foundID} is in the Wrong Order!`,
        );
      }
      logWarn(`Sorting Prerequisites in Quest with ID ${foundID}...`);

      const types = quest["preRequisiteTypes:7"];
      if (!types) quest["preRequisites:11"].sort((a, b) => a - b);
      else {
        const preRequisites = new Map<number, number>();
        quest["preRequisites:11"].forEach((pre, index) =>
          preRequisites.set(pre, types[index])
        );

        quest["preRequisites:11"].sort((a, b) => a - b);
        for (let i = 0; i < quest["preRequisites:11"].length; i++) {
          types[i] = preRequisites.get(quest["preRequisites:11"][i]) ?? 0;
        }
      }
    }

    // Check for Rewards that have Nomicoins
    if (isExpert) stripRewards(quest, shouldCheck, true);

    if (!shouldCheck) newQB[`${foundID}:10`] = quest;
  }

	// Check for Redundant Formatting in Quest Lines
	logInfo("Checking Quest Lines...");
	for (const lineKey of Object.keys(qb["questLines:9"])) {
		const line = qb["questLines:9"][lineKey];
		line["properties:10"]["betterquesting:10"]["name:8"] =
			checkSpacesAndFormatting(
				shouldCheck,
				line["properties:10"]["betterquesting:10"]["name:8"],
				line["lineID:3"],
				"Quest Line",
				"Name",
			);
		line["properties:10"]["betterquesting:10"]["desc:8"] =
			checkSpacesAndFormatting(
				shouldCheck,
				line["properties:10"]["betterquesting:10"]["desc:8"],
				line["lineID:3"],
				"Quest Line",
				"Description",
			);
	}
	if (!shouldCheck) qb["questDatabase:9"] = newQB;

	logInfo("Checking Existence of Quests...");

	const questIDs = new Set<number>();

	// Check if all quests exist in some quest line
	for (const questKey of Object.keys(qb["questDatabase:9"])) {
		const quest = qb["questDatabase:9"][questKey];

		if (!isEmptyQuest(quest)) questIDs.add(quest["questID:3"]);
	}

	for (const lineKey of Object.keys(qb["questLines:9"])) {
		const questEntries = qb["questLines:9"][lineKey]["quests:9"];
		for (const questEntryKey of Object.keys(questEntries)) {
			questIDs.delete(questEntries[questEntryKey]["id:3"]);
		}
	}

	if (questIDs.size !== 0) {
		// How do we fix this automatically? Just throw, tell the user to fix.
		if (!shouldCheck)
			logError(
				"The below issue cannot be automatically fixed. Please fix it manually. The task `infoQB` may help.",
			);

		throw new Error(
			`The Following Quests Exist, but are NOT in a Quest Line: ${[...questIDs].join(", ")}!`,
		);
	}

	logInfo("Checking Properties...");
	// Check Edit Mode
	if (qb["questSettings:10"]["betterquesting:10"]["editmode:1"] !== 0) {
		if (shouldCheck) throw new Error("Edit Mode is On!");
		logWarn("Turning off Edit Mode...");
		qb["questSettings:10"]["betterquesting:10"]["editmode:1"] = 0;
	}
}
