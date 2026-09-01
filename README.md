# Git Basics Course

> **Learn Git by building a real-world Task Manager web app** — from your first commit to collaborative workflows with branches, merges, and pull requests.

---

## What You'll Build

A **TaskFlow** — a browser-based task manager with:

- Add / complete / delete tasks
- Priority labels and due dates
- Local storage persistence
- A clean, minimal UI

You'll build this app step-by-step through the course modules, using Git at every stage.

---

## Course Modules

| # | Module | Topics |
| --- | -------- | -------- |
| 01 | [Introduction to Git](docs/01-introduction.md) | What is Git, VCS concepts, Git vs GitHub |
| 02 | [Setup & Config](docs/02-setup-config.md) | Install Git, `git config`, SSH keys |
| 03 | [Your First Repository](docs/03-first-repo.md) | `git init`, `git status`, `git add`, `git commit` |
| 04 | [Tracking Changes](docs/04-tracking-changes.md) | Staging area, diffs, `.gitignore`, `git log` |
| 05 | [Branching](docs/05-branching.md) | `git branch`, `git checkout`, `git switch` |
| 06 | [Merging & Conflicts](docs/06-merging-conflicts.md) | `git merge`, resolving conflicts, merge strategies |
| 07 | [Remote Repositories](docs/07-remote-repos.md) | `git remote`, `git push`, `git pull`, `git fetch` |
| 08 | [Pull Requests & Collaboration](docs/08-pull-requests.md) | Forks, PRs, code review workflow |
| 09 | [Undoing Changes](docs/09-undoing-changes.md) | `git restore`, `git reset`, `git revert`, `git stash` |
| 10 | [Git Best Practices](docs/10-best-practices.md) | Commit messages, branching strategies, Git flow |

---

## Project Structure

```
git-basics-course/
├── .gitignore                        # What Git should ignore
├── git-basics-course.code-workspace  # VS Code workspace config
├── README.md                         # This file
│
├── docs/                             # Course module documentation
│   ├── 01-introduction.md
│   ├── 02-setup-config.md
│   └── ...
│
├── project/                          # 🚀 TaskFlow — the real-world project
│   ├── index.html
│   ├── style.css
│   ├── app.js
│   ├── package.json
│   └── README.md
│
└── exercises/                        # Hands-on exercises per module
    ├── 01-first-commit/
    ├── 02-branching/
    ├── 03-merging/
    └── ...
```

---

## Prerequisites

- Terminal / command line basics
- A code editor (VS Code recommended — open `git-basics-course.code-workspace`)
- [Git installed](https://git-scm.com/downloads)

## Recommended VS Code Extensions

Install the recommendations when prompted, or manually:

- **GitLens** — supercharged Git within VS Code
- **Git Graph** — visualize branch history
- **Live Server** — preview the TaskFlow app in browser

---

## Quick Start

```bash
# 1. Verify Git is installed
git --version

# 2. Configure your identity (one-time setup)
git config --global user.name "Your Name"
git config --global user.email "you@example.com"

# 3. Start the course from Module 01
# Open docs/01-introduction.md
```

---

## How to Use This Course

Each module in `docs/` covers theory + commands with examples.
Each exercise in `exercises/` has a `README.md` with step-by-step tasks.
The `project/` folder is the app you'll evolve throughout the course.

> **Tip:** Use `git log --oneline --graph --all` often — it shows your full commit history visually.
