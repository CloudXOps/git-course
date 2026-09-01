# Module 08 — Pull Requests & Collaboration

## The Collaboration Workflow

```
1. Fork (or clone) the repo
2. Create a feature branch
3. Commit changes
4. Push to your fork/remote
5. Open a Pull Request
6. Code review
7. Address feedback → push more commits
8. Merge the PR
9. Delete the branch
```

---

## Forks vs Branches

| Forks | Branches |
| ------- | --------- |
| Copy the repo to your own GitHub account | Lives in the same repo |
| Used for open-source contributions | Used for team workflows |
| Submit changes via PR to original repo | Submit PR within same repo |

---

## Opening a Pull Request on GitHub

1. Push your feature branch: `git push -u origin feature/task-filters`
2. Go to GitHub → your repo → **"Compare & pull request"** button
3. Fill in:
   - **Title**: `feat: add priority filter to task list`
   - **Description**: What changed, why, how to test
   - **Reviewers**, **Labels**, **Milestone** (if applicable)
4. Click **Create pull request**

---

## Writing a Good PR Description

```markdown
## Summary
Added a priority filter dropdown to the task list so users can view
tasks by priority level (High / Medium / Low).

## Changes
- Added `<select>` element to `index.html`
- Implemented `filterByPriority()` in `app.js`
- Updated CSS for filter bar layout

## How to Test
1. Open the app in browser
2. Add tasks with different priorities
3. Use the filter dropdown — tasks should update instantly

## Related Issues
Closes #42
```

---

## Code Review Best Practices

### As a Reviewer

- Be constructive, not critical of the person
- Use `nit:` prefix for minor suggestions
- Ask questions rather than making demands
- Approve when it's good enough — don't block for perfection

### As an Author

- Keep PRs small and focused (< 400 lines changed is ideal)
- Respond to every comment
- Don't take review comments personally

---

## Keeping Your Branch Up to Date

While waiting for review, `main` may have moved forward:

```bash
git switch feature/task-filters
git fetch origin
git rebase origin/main    # Replay your commits on top of latest main

# If conflicts arise during rebase:
git rebase --continue     # After resolving
git rebase --abort        # To cancel

# Push (force-push needed after rebase)
git push --force-with-lease   # Safer than --force
```

---

## Reviewing PRs Locally

```bash
# Fetch all PR branches
git fetch origin

# Check out the PR branch to test it locally
git switch -t origin/feature/task-filters

# After review, go back
git switch main
```

---

## Merging Strategies on GitHub

| Strategy | History | When to use |
| ---------- | --------- | ------------- |
| **Merge commit** | Preserves all commits | Team repos, want full context |
| **Squash and merge** | One commit on main | Clean main history, WIP commits |
| **Rebase and merge** | Linear, no merge commit | Linear history preference |

---

## 🛠️ Hands-On

```bash
# 1. Create a feature branch
git switch -c feature/delete-tasks

# 2. Add delete functionality to project/app.js
# 3. Commit
git add .
git commit -m "feat: add delete task button and handler"

# 4. Push
git push -u origin feature/delete-tasks

# 5. Open GitHub and create a Pull Request
# 6. Review it yourself, then merge it
# 7. Back in terminal, update local main
git switch main
git pull
git branch -d feature/delete-tasks
```

---

## Next Steps

➡️ Continue to [Module 09 — Undoing Changes](09-undoing-changes.md)
