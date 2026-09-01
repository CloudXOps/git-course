# Module 06 — Merging & Conflicts

## Types of Merges

### Fast-Forward Merge

When the target branch has no new commits since the branch was created — Git simply moves the pointer forward.

```
Before:  main: A──B──C
                        \
         feature:        D──E

After:   main: A──B──C──D──E   (no merge commit)
```

```bash
git switch main
git merge feature/task-creation   # Fast-forward (if possible)
```

### 3-Way Merge

When both branches have diverged — Git creates a **merge commit** with two parents.

```
Before:  main:    A──B──C──F
                        \
         feature:        D──E

After:   main:    A──B──C──F──M   (M = merge commit, has 2 parents)
                        \     /
         feature:        D──E
```

```bash
git merge --no-ff feature/task-filters    # Force a merge commit even for FF
git merge --squash feature/wip           # Squash all commits into one staged change
```

---

## Resolving Merge Conflicts

Conflicts happen when both branches modified the **same lines** of the same file.

### Step-by-Step Conflict Resolution

```bash
# 1. Attempt the merge
git merge feature/task-filters

# → Git pauses and reports conflict(s)

# 2. See what's conflicting
git status          # Files marked as "both modified"
git diff            # Show conflict markers inline

# 3. Open the conflicting file — you'll see:
```

```
<<<<<<< HEAD
const filterTasks = (tasks) => tasks;    ← your current branch
=======
const filterTasks = (tasks, priority) => tasks.filter(t => t.priority === priority);
>>>>>>> feature/task-filters             ← incoming branch
```

```bash
# 4. Edit the file to the desired final state (remove conflict markers)

# 5. Stage the resolved file
git add app.js

# 6. Complete the merge
git commit     # Git pre-populates a merge commit message
```

### Aborting a Merge

```bash
git merge --abort    # Go back to pre-merge state
```

---

## Rebase (Alternative to Merge)

Rebase **replays** your commits on top of another branch, creating a linear history.

```
Before:  main:    A──B──C
                  \
         feature:  D──E

After rebase:  main:    A──B──C
                                \
               feature:          D'──E'  (new commits, same changes)
```

```bash
git switch feature/my-feature
git rebase main             # Replay feature commits on top of main
```

> ⚠️ **Golden Rule of Rebase:** Never rebase commits that have been pushed to a shared remote branch.

### Interactive Rebase (Clean Up History)

```bash
git rebase -i HEAD~3    # Edit the last 3 commits interactively
```

Options in interactive mode:

- `pick` — keep commit as-is
- `reword` — keep commit, edit message
- `squash` — combine with previous commit
- `fixup` — like squash, discard this commit's message
- `drop` — remove the commit entirely

---

## Merge Strategies Cheat Sheet

| Strategy | Command | When to use |
| ---------- | --------- | ------------- |
| Fast-forward | `git merge` | Simple linear feature branch |
| No-FF merge | `git merge --no-ff` | Preserve feature history |
| Squash | `git merge --squash` | Collapse messy WIP commits |
| Rebase | `git rebase main` | Clean linear history before PR |

---

## 🛠️ Hands-On

```bash
# Create a conflict intentionally:
git switch main
# Edit project/app.js — change line 1
git commit -am "chore: update app title on main"

git switch feature/task-creation
# Edit the same line 1 in app.js differently
git commit -am "chore: update app title on feature branch"

git switch main
git merge feature/task-creation    # Conflict!
# Resolve the conflict, then:
git add app.js
git commit
git log --oneline --graph          # See the merge commit
```

---

## Next Steps

➡️ Continue to [Module 07 — Remote Repositories](07-remote-repos.md)
