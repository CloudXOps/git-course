# Module 01 — Introduction to Git

## What is Version Control?

**Version Control System (VCS)** tracks changes to files over time so you can:

- Recall specific versions later
- See who changed what and when
- Collaborate without overwriting each other's work
- Experiment safely — mistakes are always recoverable

Think of it like **"save points" in a video game**, but for your code.

---

## Types of VCS

| Type | Examples | How it works |
| ------ | ---------- | -------------- |
| Local | RCS | Changes stored only on your machine |
| Centralized | SVN, CVS | Single server holds all history |
| **Distributed** | **Git**, Mercurial | Every developer has the full history |

Git is **distributed** — you have a complete copy of the repository on your local machine.

---

## What is Git?

Git is a **free, open-source distributed VCS** created by Linus Torvalds in 2005 to manage the Linux kernel source code.

Key properties:

- **Fast** — most operations are local
- **Integrity** — every file/commit is checksummed (SHA-1 hash)
- **Non-destructive** — Git mostly *adds* data, rarely deletes it
- **Branching is cheap** — creating a branch takes milliseconds

---

## Git vs GitHub

| Git | GitHub |
| ----- | -------- |
| A tool (CLI program) | A website / service |
| Runs on your machine | Hosts Git repos in the cloud |
| Does the version control | Adds collaboration features (PRs, Issues, Actions) |
| Free & open source | Free tier + paid plans |

> Other alternatives to GitHub: **GitLab**, **Bitbucket**, **Azure DevOps**

---

## The Three States of Git

Files in Git live in one of three states:

```
Working Directory  →  Staging Area (Index)  →  Repository (.git)
   (modified)           (git add)               (git commit)
```

1. **Working Directory** — where you edit files on disk
2. **Staging Area** — a "prep zone" for your next commit
3. **Repository** — the committed history stored in `.git/`

---

## Key Git Concepts

| Concept | Description |
| --------- | ------------- |
| **Repository (repo)** | A project tracked by Git (contains `.git/` folder) |
| **Commit** | A snapshot of staged changes with a message |
| **Branch** | A lightweight pointer to a commit — for parallel work |
| **HEAD** | A pointer to the currently checked-out commit/branch |
| **Remote** | A copy of the repo hosted elsewhere (e.g., GitHub) |
| **Clone** | A full local copy of a remote repository |

---

## Next Steps

➡️ Continue to [Module 02 — Setup & Config](02-setup-config.md)

### Practice Commands

```bash
# Check if Git is installed
git --version

# Open built-in Git help
git help
git help commit
```
