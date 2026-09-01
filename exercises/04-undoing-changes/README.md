# Exercise 04 — Undoing Changes

## Goal

Practice the different ways to undo changes in Git.

## Scenario Setup

Make sure you're in the `project/` directory with a clean working tree.

---

## Part A: Discard Unstaged Changes

```bash
# Make an unwanted change to style.css
echo "/* accidental change */" >> style.css
git status    # See it as unstaged

# Discard it
git restore style.css
git status    # Clean again
```

---

## Part B: Unstage a File

```bash
# Stage a file you didn't mean to
git add style.css
git status    # It's staged

# Unstage it
git restore --staged style.css
git status    # Back to unstaged
```

---

## Part C: Amend a Commit Message

```bash
# Make a commit with a typo
echo "/* todo */" >> style.css
git add style.css
git commit -m "stlye: add todo comment"   # typo!

# Fix the message
git commit --amend -m "style: add todo comment"
git log --oneline   # Corrected message
```

---

## Part D: Undo a Commit (keep changes)

```bash
# Make a commit you want to undo
echo "console.log('debug')" >> app.js
git add app.js
git commit -m "debug: temporary log"

# Undo the commit but keep the change staged
git reset --soft HEAD~1
git status   # Change is back in staging area
```

---

## Part E: Stash Work in Progress

```bash
# Start a new feature but need to switch branches urgently
echo "/* wip: dark mode */" >> style.css

# Stash the WIP
git stash push -m "WIP: dark mode styling"

git status   # Clean working tree — safe to switch branches

# Come back to your WIP
git stash pop
git status   # Changes restored
```

---

## Part F: Recover with Reflog

```bash
# Do a hard reset (danger!)
git reset --hard HEAD~2

# Recover the "lost" commits
git reflog                          # Find the commit hash
git switch -c recovery abc1234      # Replace with your actual hash
git log --oneline                   # Commits are back!
```

## Key Takeaway

> When in doubt, use `git stash` or `git reset --soft` — they're reversible.
> Only use `git reset --hard` when you're absolutely sure.
