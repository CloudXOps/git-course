# Module 09 — Undoing Changes

## Decision Tree: Which Command to Use?

```
Did you commit yet?
│
├── No (working tree / staging area changes)
│   ├── Discard unstaged changes → git restore <file>
│   └── Unstage a file          → git restore --staged <file>
│
└── Yes (committed)
    ├── Keep history intact (safe for shared branches) → git revert
    └── Rewrite history (only local/private branches)
        ├── Move HEAD back, keep changes staged    → git reset --soft
        ├── Move HEAD back, keep changes unstaged  → git reset --mixed (default)
        └── Move HEAD back, DISCARD all changes    → git reset --hard ⚠️
```

---

## `git restore` — Undo Uncommitted Changes

```bash
# Discard changes in working tree (unstaged)
git restore app.js
git restore .                     # All files

# Unstage a file (move from index back to working tree)
git restore --staged app.js
git restore --staged .

# Restore a file to how it was in a specific commit
git restore --source=HEAD~2 app.js
```

---

## `git reset` — Move HEAD (Rewrite History)

```bash
# --soft: move HEAD, keep all changes staged
git reset --soft HEAD~1

# --mixed (default): move HEAD, keep changes but unstaged
git reset HEAD~1
git reset --mixed HEAD~1

# --hard: move HEAD and DISCARD all changes ⚠️ destructive
git reset --hard HEAD~1

# Reset to a specific commit
git reset --hard abc1234
```

> ⚠️ Never `reset --hard` commits that have been pushed to a shared branch.

---

## `git revert` — Safe Undo for Shared History

Creates a **new commit** that undoes a previous one. History is preserved.

```bash
git revert HEAD             # Undo the last commit
git revert abc1234          # Undo a specific commit
git revert HEAD~3..HEAD     # Undo last 3 commits (creates 3 revert commits)
git revert -n HEAD          # Stage the revert without committing yet
```

---

## `git stash` — Temporarily Save WIP

```bash
git stash                               # Save current WIP
git stash push -m "WIP: filter logic"  # Named stash
git stash list                          # See all stashes
git stash show stash@{0}               # Summary of a stash
git stash pop                           # Apply latest + remove from stack
git stash apply stash@{1}              # Apply without removing
git stash drop stash@{0}               # Delete a stash
git stash clear                         # Remove ALL stashes ⚠️
```

---

## `git commit --amend` — Fix the Last Commit

```bash
# Fix the commit message
git commit --amend -m "feat: add task creation form with validation"

# Add a forgotten file to the last commit
git add forgotten-file.js
git commit --amend --no-edit

# After amending, if already pushed, you must force-push:
git push --force-with-lease
```

> Only amend commits that haven't been shared yet.

---

## `git reflog` — The Safety Net

The reflog records every time HEAD moved. Even after a `reset --hard` or deleted branch, you can recover commits.

```bash
git reflog                      # See HEAD movement history
git reflog show feature/old     # Reflog for a specific branch

# Recover a "lost" commit
git reflog
# Find the commit hash (e.g., abc1234)
git switch -c recovery-branch abc1234   # Restore it as a new branch
```

> The reflog is local only and expires after ~90 days by default.

---

## Quick Reference

| Scenario | Command |
| ---------- | --------- |
| Discard unstaged changes | `git restore <file>` |
| Unstage a file | `git restore --staged <file>` |
| Edit last commit message | `git commit --amend -m "..."` |
| Undo last commit (keep changes) | `git reset --soft HEAD~1` |
| Undo a commit safely | `git revert HEAD` |
| Save WIP without committing | `git stash push -m "..."` |
| Recover deleted branch | `git reflog` then `git switch -c` |

---

## Next Steps

➡️ Continue to [Module 10 — Git Best Practices](10-best-practices.md)
