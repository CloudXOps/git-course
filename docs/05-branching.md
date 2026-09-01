# Module 05 — Branching

## What is a Branch?

A branch is just a **lightweight pointer** to a commit. Creating one is instant and nearly free.

```
main:      A ── B ── C
                      \
feature:               D ── E
```

`HEAD` points to the current branch (or directly to a commit in "detached HEAD" state).

---

## Creating & Switching Branches

```bash
# Modern way (Git 2.23+)
git switch -c feature/add-tasks    # Create and switch
git switch main                    # Switch to existing branch

# Classic way (still works)
git checkout -b feature/add-tasks  # Create and switch
git checkout main                  # Switch to existing
```

---

## Listing Branches

```bash
git branch              # Local branches (* = current)
git branch -r           # Remote branches
git branch -a           # All (local + remote)
git branch -v           # With last commit info
```

---

## Branching Workflow (Feature Branch Model)

```bash
# 1. Start from an up-to-date main
git switch main
git pull

# 2. Create a feature branch
git switch -c feature/task-filters

# 3. Work, stage, commit
git add .
git commit -m "feat: add priority filter to task list"

# 4. When done, merge back (see Module 06)
git switch main
git merge feature/task-filters

# 5. Delete the branch after merging
git branch -d feature/task-filters
```

---

## Renaming & Deleting Branches

```bash
git branch -m old-name new-name    # Rename
git branch -d feature/done         # Delete (safe — only if merged)
git branch -D feature/abandon      # Force delete (unmerged OK)
```

---

## Tracking Remote Branches

```bash
# Push a local branch and set its upstream
git push -u origin feature/task-filters

# Now you can just use:
git push
git pull
```

---

## Stashing Work in Progress

When you need to switch branches but aren't ready to commit:

```bash
git stash                   # Save WIP to stash stack
git stash push -m "WIP: filter logic"  # With a name
git stash list              # See all stashes
git stash pop               # Apply latest and remove from stack
git stash apply stash@{1}   # Apply a specific stash (keep it)
git stash drop stash@{0}    # Remove a stash
git stash branch fix/urgent-bug  # Create a branch from a stash
```

---

## 🛠️ Hands-On

```bash
# Add a new feature on a branch
git switch -c feature/task-creation

# Create/edit project/app.js to add task creation logic
# Then:
git add app.js
git commit -m "feat: implement add task functionality"

git log --oneline --graph --all   # See the branch diverge
git switch main                   # Go back to main
git log --oneline                 # main doesn't have the feature yet
```

---

## Next Steps

➡️ Continue to [Module 06 — Merging & Conflicts](06-merging-conflicts.md)
