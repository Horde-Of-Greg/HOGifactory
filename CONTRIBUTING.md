# Scope of this document

## Who is this for?

This document is for anyone wanting to contribute to our project and aims to provide a comprehensive guide at how and why we do what we do. This is meant for experienced maintainers of this project as well as for people who do have no prior experience with GitHub.

## Organization of the document

- [Scope of this document](#scope-of-this-document)
  - [Who is this for?](#who-is-this-for-)
  - [Organization of the document](#organization-of-the-document)
- [1. How to contribute as someone who is not part of the project](#1-how-to-contribute-as-someone-who-is-not-part-of-the-project)
  - [1.1 Pull Requests](#11-pull-requests)
    - [1.1.1 Create an issue](#111-create-an-issue)
    - [1.1.2 Create a fork of the repo on your personal profile](#112-create-a-fork-of-the-repo-on-your-personal-profile)
    - [1.1.3 Create a pull request](#113-create-a-pull-request)
    - [1.1.4 Accept criticism](#114-accept-criticism)
  - [1.2 Issues](#12-issues)
    - [1.2.1 Search the issues for your problem](#121-search-the-issues-for-your-problem)
    - [1.2.2 Follow the template](#122-follow-the-template)
    - [1.2.3 Details, details, details](#123-details--details--details)
    - [1.2.4 Any idea is welcome](#124-any-idea-is-welcome)
- [2. How to contribute as someone who is part of the project](#2-how-to-contribute-as-someone-who-is-part-of-the-project)
  - [2.1 As a maintainer](#21-as-a-maintainer)
    - [2.1.1 Make an issue if it's a breaking feature](#211-make-an-issue-if-it-s-a-breaking-feature)
    - [2.1.2 Get a token to write directly to the repo](#212-get-a-token-to-write-directly-to-the-repo)
    - [2.1.3 Make a new fork with a clear name](#213-make-a-new-fork-with-a-clear-name)
    - [2.1.4 Make a detailed PR.](#214-make-a-detailed-pr)
    - [2.1.5 Wait for an appropriate amount of reviews](#215-wait-for-an-appropriate-amount-of-reviews)
    - [2.1.6 Squash and merge](#216-squash-and-merge)
  - [2.2 As a questbook writer](#22-as-a-questbook-writer)
  - [2.3 As a Horde Of Greg member](#23-as-a-horde-of-greg-member)
- [3. Technical standards, conventions and requirements](#3-technical-standards--conventions-and-requirements)
  - [3.1 GitHub](#31-github)
    - [3.1.1 Signed commits](#311-signed-commits)
    - [3.1.2 Environment](#312-environment)
  - [3.2 Pack Dev](#32-pack-dev)
    - [3.2.1 Tools used](#321-tools-used)
    - [3.2.2 Naming conventions](#322-naming-conventions)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

# 1. How to contribute as someone who is not part of the project

## 1.1 Pull Requests

### 1.1.1 Create an issue

Pull requests should be linked to an issue that details what this pull request aims to do. Doing this keeps a clear flow of discussion. Discussions take place first in the issue, then the code gets written.

### 1.1.2 Create a fork of the repo on your personal profile

To be able to contribute to the project at all via pull requests you will need to create a fork of the pack to your own personal profile, and do the work there.

### 1.1.3 Create a pull request

From within your fork you should be able to create a pull request, make sure your pull request is set to the branch you worked on locally. You can push to main safely, unless specified otherwise.

### 1.1.4 Accept criticism

Once you opened your PR, we will review it to make sure it is what we want and how we wanted it to be done. If we approve your PR we will merge it and everything is great. If we don't, we may either fix it ourselves, or ask you to do some more changes to it. If the latter happens, do NOT start getting defensive about your code. Either explain to us why you don't agree and why you think we may be wrong in our assumptions in a constructive way, or go change your code. Responses along the lines of "what would you know? I'm a much better developer than you anyway" help no one, and may end up with us not wanting to work with you anymore and closing your PR.

## 1.2 Issues

### 1.2.1 Search the issues for your problem

If you had a bug, chances are others already experienced it, so make sure you do your best to look in the issues for someone that has had the same problem as you. If you do find it, contribute to it by explaining your situation if it adds to the discussion or simply say "this happened to me too". Duplicate issues will be marked as such and closed.

### 1.2.2 Follow the template

If we have a template for issues, it's for a reason. Don't start skipping steps just because you think it's not important. If you genuinely don't know what to put in a category, just skip it. But take the time to do this carefully.

### 1.2.3 Details, details, details

The more details you add, the better, so don't be afraid to put as many logs as you want or come back to the discussion and add more details will get closed. Issues that are too vague, along the lines of "error when launching the pack, here's a screenshot" will get closed. Explain the context, explain what you already tried, what you think it is, if this has happened on other packs.

### 1.2.4 Any idea is welcome

This pack aims to get wild (Hog wild I should say), if you have an idea that doesn't fit any pack, maybe it will here. We won't judge any kind of idea, and you can propose anything. It doesn't mean we will add it, both for balance and technical reasons, but ideas are how we create discussion, and your idea may translate to something completely different. So don't be afraid, just bring up whatever is on your mind.

# 2. How to contribute as someone who is part of the project

## 2.1 As a maintainer

### 2.1.1 Make an issue if it's a breaking feature

If you're just cleaning up the code or changing something minor here and there, no need to create an issue. But if you want to add a whole new tier for example, definitely make an issue.

### 2.1.2 Get a token to write directly to the repo

Do NOT make a fork of the pack, it's much easier for everyone if we can contribute directly to your branch without needing to check out from your PR or asking you for a key to your forked repo. You will need to get the key from your own personal profile, and we will have to approve it, so make sure you notify me if you want it fast.

### 2.1.3 Make a new fork with a clear name

The fork should have a clear name. Not "D-Alessian-branch-3" or something in that fashion.

### 2.1.4 Make a detailed PR.

Even if you're making a basic change or cleaning up some things, have a good name and explain what and why you made some changes.

### 2.1.5 Wait for an appropriate amount of reviews

The minimum amount of reviews to merge the project is 2, but depending on the change you may want more. If it's a breaking change, unless someone is on vacation, wait for the entire team's approval. Don't rush merging changes.

### 2.1.6 Squash and merge

Squash and merge the PR, and give the merge commit a good name, this is the most important name to give as it will stay in the codebase forever.

## 2.2 As a questbook writer

Placeholder for now. Not very well established.

## 2.3 As a Horde Of Greg member

It's pretty simple, ask me on discord for a maintainer or questbook role, and I'll consider what I should do depending on how much I trust you and how active you are.

# 3. Technical standards, conventions and requirements

## 3.1 GitHub

### 3.1.1 Signed commits

As a git standard, it's better if you sign your commits either through gpg or ssh. We won't FORCE you to do this, as it can get annoying, but it's heavily recommended. This is the documentation to [GitHub](https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits), and this is the documentation for [IntelliJ](https://www.jetbrains.com/help/idea/2024.2/set-up-GPG-commit-signing.html?Set_up_GPG_commit_signing&utm_source=product&utm_medium=link&utm_campaign=IU&utm_content=2024.2&keymap=macOS#set-up-gpg-keys)

You can sign a commit with GH CLI by adding the -S flag. `git commit -S -m 'sample commit'`

Remember you can also [add aliases to git commands](https://stackoverflow.com/questions/14753603/shortcuts-for-git-commands), this can save a lot of time.

### 3.1.2 Environment

DO NOT CODE WITHIN GITHUB ITSELF. You can only commit one file at a time, you don't have the usual tools a regular IDE would give you, it's prone to make you lose your work if you exit the page. We recommend using IntelliJ, but we won't tell you which IDE to use if you have your IDE that you like.

## 3.2 Pack Dev

### 3.2.1 Tools used

- Do not use CraftTweaker, use [GroovyScript](https://cleanroommc.com/groovy-script/) to make changes to the recipes or add items. There are a lot of CraftTweaker scripts right now as there was no better option when it was written, but they should eventually get phased out.
- TBD

### 3.2.2 Naming conventions

- Use basic [Java naming conventions](https://www.oracle.com/java/technologies/javase/codeconventions-namingconventions.html). Don't use `My_Test_Variable`, use `myTestVariable`
- TBD
