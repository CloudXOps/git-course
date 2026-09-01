# Module 03 — Your First Repository

## Creating a Repository

### Option A: Initialize a new repo

```bash
mkdir my-project && cd my-project
git init
# Creates a hidden .git/ directory — this IS the repository
```

### Option B: Clone an existing repo

```bash
git clone https://github.com/user/repo.git
git clone git@github.com:user/repo.git   # SSH (preferred)
```

---

## The Git Workflow

```
 ┌──────────────────┐   git add   ┌───────────────┐  git commit  ┌────────────┐
 │  Working Tree    │ ──────────► │  Staging Area │ ───────────► │    Repo    │
 │  (your files)    │             │   (index)     │              │  (.git/)   │
 └──────────────────┘             └───────────────┘              └────────────┘
         ▲                                                               │
         └───────────────────── git checkout ◄─────────────────────────┘
```

---

## Core Commands

### `git status`

Shows the state of your working tree and staging area.

```bash
git status
# Short form:
git status -s
```

Status codes in `-s` output:

- `??` — untracked (new file Git doesn't know about)
- `A` — staged (added to index)
- `M` — modified in working tree (not staged)
- `M` — modified and staged
- `D` — deleted

### `git add`

Move changes from the working tree into the staging area.

```bash
git add index.html          # Stage a specific file
git add src/                # Stage a whole directory
git add .                   # Stage everything in current dir
git add -p                  # Interactively stage chunks ("patch mode")
```

> **Best practice:** Use `git add -p` to review what you're staging before committing.

### `git commit`

Save the staged snapshot permanently into the repository.

```bash
git commit -m "Add homepage HTML structure"

# Opens editor for a multi-line message:
git commit

# Stage tracked files and commit in one step:
git commit -am "Fix typo in heading"
```

---

## Writing Good Commit Messages

```
<type>: <short summary in imperative mood>   ← subject (max 72 chars)

[optional body explaining WHY, not WHAT]

[optional footer: issue refs, breaking changes]
```

### Commit Types (Conventional Commits)

| Type | Use when |
| ------ | ---------- |
| `feat` | Adding a new feature |
| `fix` | Fixing a bug |
| `docs` | Documentation only |
| `style` | Formatting, whitespace |
| `refactor` | Code change that isn't a fix or feature |
| `test` | Adding or updating tests |
| `chore` | Build scripts, tooling |

### Good vs Bad Examples

```bash
# ❌ Bad
git commit -m "stuff"
git commit -m "fix bug"
git commit -m "WIP"

# ✅ Good
git commit -m "feat: add task creation form"
git commit -m "fix: prevent duplicate task IDs"
git commit -m "docs: update setup instructions in README"
```

---

## 🛠️ Hands-On: Make Your First Commit

Navigate to the `project/` folder and make your first commit:

```bash
cd project/
git status                  # See untracked files
git add index.html          # Stage the HTML file
git status                  # See it move to "staged"
git commit -m "feat: add initial HTML structure for TaskFlow"
git log --oneline           # See your commit in history
```

---

## Next Steps

➡️ Continue to [Module 04 — Tracking Changes](04-tracking-changes.md)
