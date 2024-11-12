import { Icon, Quest, QuestBook, QuestVisibility } from "#types/bqQuestBook.ts";
import upath from "upath";
import { select } from "@inquirer/prompts";
import { configFolder, storageFolder } from "#globals";
import { logWarn } from "#utils/log.ts";
import sortKeys from "sort-keys";
import lodash from "lodash";

export const emptyQuestName = "Gap";
export const emptyQuestDescription =
  "Unused Gap Quest. Prevents Overriding Of IDs.";
export const emptyQuestVisibility: QuestVisibility = "HIDDEN";
export const emptyQuestIconId = "minecraft:air";
export const emptyQuestTaskId = "bq_standard:checkbox";

export const emptyQuest: Quest = {
  "preRequisites:11": [],
  "properties:10": {
    "betterquesting:10": {
      "autoclaim:1": 0,
      "desc:8": "Unused Gap Quest. Prevents Overriding Of IDs.",
      "globalshare:1": 0,
      "icon:10": {
        "Count:3": 0,
        "Damage:2": 0,
        "OreDict:8": "",
        "id:8": "minecraft:air",
      },
      "ignoresview:1": 0,
      "ismain:1": 0,
      "issilent:1": 1,
      "lockedprogress:1": 0,
      "name:8": "Gap",
      "partysinglereward:1": 0,
      "questlogic:8": "AND",
      "repeat_relative:1": 1,
      "repeattime:3": -1,
      "simultaneous:1": 0,
      "snd_complete:8": "minecraft:entity.player.levelup",
      "snd_update:8": "minecraft:entity.player.levelup",
      "tasklogic:8": "AND",
      "visibility:8": "HIDDEN",
    },
  },
  "questID:3": 0,
  "rewards:9": {},
  "tasks:9": {
    "0:10": {
      "index:3": 0,
      "taskID:8": "bq_standard:checkbox",
    },
  },
};

/* Paths */
export const cfgPath = upath.join(
  configFolder,
  "betterquesting",
  "DefaultQuests.json",
);

const nomiCoinMatcher = /^nomilabs:nomicoin[0-9]*$/;

export function removeFormatting(input: string): string {
  if (!input.includes("§")) return input;

  const builder: string[] = [];
  for (let i = 0; i < input.length; i++) {
    const char = input.charAt(i);
    if (char === "§") {
      i++; // Skip Next Character
      continue;
    }
    builder.push(char);
  }
  return builder.join("");
}

export function stripRewards(quest: Quest, shouldCheck = false, log = false) {
  for (const rewardKey of Object.keys(quest["rewards:9"])) {
    const reward = quest["rewards:9"][rewardKey];
    if (
      !reward ||
      reward["rewardID:8"] !== "bq_standard:item" ||
      !reward["rewards:9"]
    ) {
      continue;
    }

    for (const itemKey of Object.keys(reward["rewards:9"])) {
      const item: Icon = reward["rewards:9"][itemKey];
      if (item && item["id:8"] && nomiCoinMatcher.test(item["id:8"])) {
        if (shouldCheck) {
          throw new Error(
            `Expert Quest with ID ${quest["questID:3"]} has Nomi Coin Reward!`,
          );
        }
        if (log) {
          logWarn(
            `Removing Nomi Coin Reward for Expert Quest with ID ${
              quest["questID:3"]
            }...`,
          );
        }
        delete reward["rewards:9"][itemKey];
      }
    }
    if (Object.keys(reward["rewards:9"]).length === 0) {
      delete quest["rewards:9"][rewardKey];
    } else quest["rewards:9"][rewardKey] = reward;
  }
}

export async function booleanSelect(
  message: string,
  trueMsg = "Yes",
  falseMsg = "No",
  defaultTo = true,
): Promise<boolean> {
  return (
    await select({
      message: message,
      choices: [
        {
          name: trueMsg,
          value: true,
        },
        {
          name: falseMsg,
          value: false,
        },
      ],
      default: defaultTo,
    })
  ).valueOf();
}

export function id(quest: Quest): number {
  return quest["questID:3"];
}

export function name(quest: Quest): string {
  return quest["properties:10"]["betterquesting:10"]["name:8"];
}

export function dependencies(quest: Quest): number[] {
  return quest["preRequisites:11"];
}

export function isEmptyQuest(quest: Quest): boolean {
  return (
    questIsSilent(quest) &&
    emptyName(quest) &&
    emptyDesc(quest) &&
    emptyVisibility(quest) &&
    emptyIcon(quest) &&
    questHasNoRewards(quest) &&
    emptyTasks(quest)
  );
}

function emptyName(quest: Quest): boolean {
  const questName = name(quest);
  return questName === emptyQuestName || !questName;
}

function emptyDesc(quest: Quest): boolean {
  const questDesc = quest["properties:10"]["betterquesting:10"]["desc:8"];
  return questDesc === emptyQuestDescription || !questDesc;
}

function emptyVisibility(quest: Quest): boolean {
  const questVisibility =
    quest["properties:10"]["betterquesting:10"]["visibility:8"];
  return questVisibility === emptyQuestVisibility;
}

function emptyIcon(quest: Quest): boolean {
  const questIcon = quest["properties:10"]["betterquesting:10"]["icon:10"];
  return (
    !questIcon || questIcon["id:8"] === emptyQuestIconId || !questIcon["id:8"]
  );
}

function questIsSilent(quest: Quest): boolean {
  return quest["properties:10"]["betterquesting:10"]["issilent:1"] !== 0;
}

function questHasNoRewards(quest: Quest): boolean {
  return !quest["rewards:9"] || Object.keys(quest["rewards:9"]).length === 0;
}

function emptyTasks(quest: Quest): boolean {
  return (
    !quest["tasks:9"] ||
    Object.keys(quest["tasks:9"]).length === 0 ||
    (Object.keys(quest["tasks:9"]).length === 1 &&
      (!quest["tasks:9"]["0:10"] ||
        !quest["tasks:9"]["0:10"]["taskID:8"] ||
        quest["tasks:9"]["0:10"]["taskID:8"] === emptyQuestTaskId))
  );
}

export function stringifyQB(qb: QuestBook): string {
  // Formatting Changes
  const replacements = [
    {
      search: /</g,
      replacement: "\\u003c",
    },
    {
      search: />/g,
      replacement: "\\u003e",
    },
    {
      search: /&/g,
      replacement: "\\u0026",
    },
    {
      search: /=/g,
      replacement: "\\u003d",
    },
    {
      search: /'/g,
      replacement: "\\u0027",
    },
  ];
  qb = sortKeysRecursiveIgnoreArray(qb, (key1, key2): number => {
    const defaultVal = key2 < key1 ? 1 : -1;

    if (!key1.includes(":") || !key2.includes(":")) return defaultVal;

    const num1 = Number.parseInt(key1.split(":")[0]);
    const num2 = Number.parseInt(key2.split(":")[0]);

    if (Number.isNaN(num1) || Number.isNaN(num2)) return defaultVal;
    return num1 - num2;
  });
  let parsed = JSON.stringify(qb, null, 2).replace(
    /("[a-zA-Z_]+:[56]":\s)(-?[0-9]+)(,?)$/gm,
    "$1$2.0$3",
  ); // Add '.0' to any Float/Double Values that are Integers

  for (const replacement of replacements) {
    parsed = parsed.replace(replacement.search, replacement.replacement);
  }
  return parsed;
}

/**
 * Use our own, instead of sortKeysRecursive, to ignore sorting of arrays.
 */
function sortKeysRecursiveIgnoreArray<T extends object>(
  object: T,
  compare: (a: string, b: string) => number,
): T {
  const result = sortKeys(object as Record<string, unknown>, { compare }) as T;

  // We can modify results, Object.Keys returns a static array
  Object.keys(result).forEach(function (key) {
    const current = lodash.get(result, key);
    if (current) {
      if (typeof current === "object") {
        lodash.set(result, key, sortKeys(current, { compare }));
        return;
      }
    }
  });

  return result;
}
