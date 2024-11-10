<h1>Scope of this document</h1>
<h2>Who is this for?</h2>
This document is for anyone wanting to contribute to our project and aims to provide a comprehensive guide at how and why we do what we do. This is meant for experienced maintainers of this project as well as for people who do have no prior experience with GitHub.
<h2>Organization of the document</h2>

### 1.How to contribute as someone who is not part of the project : 
This section will explain how you can contribute as someone who is not part of the Horde Of Greg community. 
#### 1.1 Pull Requests
This explains how you can submit bug fixes and feature implementations directly to us without waiting for us to implement the code. If you have never coded this is probably not where you should be contributing.
#### 1.2 Issues
This explains how you can contribute to the project even if you have no experience whatsoever coding or using GitHub. This is where you submit bug reports or feature ideas
### 2. How to contribute as someone who is part of the project
This section will explain how you can contribute as someone who is not part of the Horde Of Greg community.
#### 2.1 As a maintainer
This section only applies to maintainers of the Project. This is only here for transparency's sake and to hold our maintainers accountable to our standards.
#### 2.2 As a questbook writer
This section is to explain how verified questbook contributors should contribute to the questbook. This is not the documentation on how to write quests.
#### 2.3 As a Horde Of Greg member
This sections applies to members of our Horde Of Greg community that do not have a role in the GitHub organization.
### 3. Technical standards, conventions and requirements
This section will explain how you should contribute to the project in technical terms. What tools you should use, what we expect, our naming conventions.
#### 3.1 GitHub
This section will explain all GitHub (and Git) related standards we expect. We won't talk about the standards we forced with rulesets like not being able to commit directly to main.
#### 3.2 Pack Dev
This section will explain what tools, languages, mods you should use to develop the pack. This is very important to follow as we will not accept PRs that do not follow these.

<details open>

<summary> <h1> 1. How to contribute as someone who is not part of the project </h1> </summary>

<details>
<summary> <h2> 1.1 Pull Requests </h2> </summary>

### 1.1.1 Create an issue
Pull requests should be linked to an issue that details what this pull request aims to do. This is to keep things organized, and because if you decide, or we decide to close your PR, the issue will still be there to tell us there is something we should maybe add to the pack, or that a bug is present.
### 1.1.2 Create a fork of the repo on your personal profile
To be able to contribute to the project at all via pull requests you will need to create a fork of the pack to your own personal profile. Unless you are doing something very specific on a specific branch, make sure you make changes in the main branch and not anywhere else, as working in other branches may cause compatibility problems when trying to merge your PR. You can use the same repo for different PRs, you don't need to fork it every time. It is heavily recommended to not work within the main branch on your repo and create a new branch for every PR so you can keep the main branch up to date with upstream
### 1.1.3 Create a pull request
From within your fork you should be able to create a pull request, make sure your pull request to the DEV branch and not to the main branch so we can test your code before merging it into main. This is very important and we will close your PR if you opened the PR to the wrong branch.
### 1.1.4 Accept criticism
Once you opened your PR, we will review it to make sure it is what we want and how we wanted it to be done. If we approve your PR we will merge it and everything is great. If we don't, we may either fix it ourselves, or ask you to do some more changes to it. If the latter happens, do NOT start getting defensive about your code. Either explain to us why you don't agree and why you think we may be wrong in our assumptions in a constructive way, or go change your code. Responses along the lines of "what would you know? I'm a much better developper than you anyways" help no one, and may end up with us not wanting to work with you anymore and closing your PR.
</details>

<details>
<summary> <h2> 1.2 Issues </h2> </summary>

### 1.2.1 Search the issues for your problem
If you had a bug, chances are others already experienced it, so make sure you do your best to look in the issues for someone that has had the same problem as you. If you do find it, contribute to it by explaining your situation if it adds to the discussion or simply say "this happened to me too". Duplicate issues will be marked as such and closed.
### 1.2.2 Follow the template
If we have a template for issues, it's for a reason. Don't start skipping steps just because you think it's not important. If you genuinely don't know what to put in a category, just skip it. But take the time to do this carefully.
### 1.2.3 Details, details, details
The more details you add, the better, so don't be afraid to put as many logs as you want or come back to the discussion and add more details will get closed. Issues that are too vague, along the lines of "error when launching the pack, here's a screenshot" will get closed. Explain the context, explain what you already tried, what you think it is, if this has happened on other packs.
### 1.2.4 Any idea is welcome
This pack aims to get wild (Hog wild I should say), if you have an idea that doesn't fit any pack, maybe it will here. We won't judge any kind of idea, and you can propose anything. It doesn't mean we will add it, both for balance and technical reasons, but ideas are how we create discussion, and your idea may translate to something completely different. So don't be afraid, just bring up whatever's on your mind.
</details>

</details>



<details open>
<summary> <h1> 2. How to contribute as someone who is part of the project </h1> </summary>

<details>
<summary> <h2> 2.1 As a maintainer </h2> </summary>

### 2.1.1 Make an issue if it's a breaking feature
If you're just cleaning up the code or changing something minor here and there, no need to create an issue. But if you want to add a whole new tier for example, definitely make an issue, and probably even a discussion. 
### 2.1.2 Get a token to write directly to the repo
Do NOT make a fork of the pack, it's much easier for everyone if we can contribute directly to your branch without needing to checkout from your PR or asking you for a key to your forked repo. You will need to get the key from your own personal profile and we will have to approve it, so make sure you notify me if you want it fast.
### 2.1.3 Make a new fork with a clear name
The fork should have a clear name. Not "D-Alessian-branch-3" or something in that fashion.
### 2.1.4 Make a detailled PR.
Even if you're making a basic change or cleaning up some things, have a good name and explain what and why you made some changes.
### 2.1.5 Wait for an apprioprate amount of reviews
The minimum amount of reviews to merge the project is 2, but depending on the change you may want more. If it's a breaking change, unless someone is on vacation, wait for the enitre team's approval. Don't rush merging changes.
### 2.1.6 Squash and merge
Squash and merge the PR, and give the merge commit a good name, this is the most important name to give as it will stay in the codebase forever.
</details>

<details>
<summary> <h2>  2.2 As a questbook writer </h2> </summary>

Placeholder for now. Not very well established.
</details>

<details>
<summary> <h2>  2.3 As a Horde Of Greg member </h2> </summary>

It's pretty simple, ask me on discord for a maintainer or questbook role, and I'll consider what I should do depending on how much I trust you and how active you are.
</details>

</details>



<details open>
<summary> <h1> 3. Technical standards, conventions and requirements </h1> </summary>

<details>
<summary> <h2>  3.1 GitHub </h2> </summary>

### 3.1.1 Signed commits
As a git standard, it's better if you sign your commits either through gpg or ssh. We won't FORCE you to do this, as it can get annoying, but it's heavily recommended. This is the documentation to [GitHub](https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits), and this is the documentation for [IntelliJ](https://www.jetbrains.com/help/idea/2024.2/set-up-GPG-commit-signing.html?Set_up_GPG_commit_signing&utm_source=product&utm_medium=link&utm_campaign=IU&utm_content=2024.2&keymap=macOS#set-up-gpg-keys)
### 3.1.2 Environment
DO NOT CODE WITHIN GITHUB ITSELF. Unless you are doing something very simple and mostly text based (like writing this very text here), do not use github to modify code, it sucks. You can only commit one file at a time, you don't have the usual tools a regular IDE would give you, it's prone to making you lose your work if you exit the page, and it's overall just not a good option for anything other than text editing. We recommend using IntelliJ, but we won't tell you which IDE to use if you have your IDE that you like.
### 3.1.3 Sign-off commits
This will not be enforced, but do make sure you sign-off your commits, this is just to improve tracking of which changes were made by who. Documentation on how to do it [here](https://dev.to/janderssonse/git-signoff-and-signing-like-a-champ-41f3). This is also pretty easy to do within IntelliJ, see below.
<p><img src="https://github.com/Horde-Of-Greg/HOGifactory/blob/main/assets/documentation/IntelliJ/sign-off/commit-settings.png?raw=true" alt="Logo" height="200" ></p>
<p><img src="https://github.com/Horde-Of-Greg/HOGifactory/blob/main/assets/documentation/IntelliJ/sign-off/sign-off.png?raw=true" alt="Logo" height="200" ></p>

</details>

<details>
<summary> <h2>  3.2 Pack Dev </h2> </summary>

### 3.2.1 Tools used
- Do not use CraftTweaker, use [GroovyScript](https://cleanroommc.com/groovy-script/) to make changes to the recipes or add items. There are a lot of CraftTweaker scripts right now as there was no better option when it was written, but they should eventually get phased out.
- TBD
### 3.2.2 Naming conventions
- Use basic [Java naming conventions](https://www.oracle.com/java/technologies/javase/codeconventions-namingconventions.html). Don't use `My_Test_Variable`, use `myTestVariable`
- TBD
</details>

</details>