# Module 10 — Git Best Practices

## Commit Hygiene

### Commit Often, Commit Small

- One logical change per commit
- A commit should pass tests and leave the code in a working state
- Avoid "catch-all" commits like "various fixes"

### The Imperative Mood Rule

Write commit messages as if completing the sentence:
> "If applied, this commit will..."

```bash
✅ "feat: add search bar to task list"
✅ "fix: prevent null pointer in filter function"
❌ "added search"
❌ "fixes a bug"
```

---

## Branching Strategies

### GitHub Flow (Simple — recommended for most teams)

```
main (always deployable)
  └── feature/task-search     ← branch → PR → merge → delete
  └── fix/priority-bug
  └── docs/update-readme
```

1. Branch from `main`
2. Commit on your branch
3. Open a PR
4. Deploy from the PR branch (optional)
5. Merge to `main`
6. Delete the branch

### Git Flow (Complex — for scheduled releases)

```
main     ← production releases (tagged)
develop  ← integration branch
  └── feature/*
  └── release/*
  └── hotfix/*
```

Use Git Flow when you have formal release cycles.

---

## Branch Naming Conventions

```bash
feature/short-description       # New feature
fix/bug-description             # Bug fix
docs/what-you-updated           # Documentation
chore/tooling-change            # Tooling / config
refactor/component-name         # Code cleanup
test/what-youre-testing         # Test additions
hotfix/critical-issue           # Urgent fix for production
```

---

## .gitignore Checklist

Always ignore:

- `node_modules/` — regenerated from `package.json`
- `.env` files — contain secrets
- `dist/` / `build/` — generated output
- Editor files — `.idea/`, `.vscode/` (personal settings)
- OS files — `.DS_Store`, `Thumbs.db`

---

## Code Review Etiquette

### PR Size

- Aim for < 400 lines changed
- Split large features into a series of smaller PRs
- A reviewer can't give quality feedback on 2,000-line PRs

### Review Comments

```
# Blocking (must be resolved before merge)
This will cause a race condition. Please use a mutex.

# Suggestion (non-blocking)
nit: consider using Array.from() instead for readability

# Question
Why is this debounced to 300ms specifically?

# Praise
Nice refactor! This is much cleaner than before.
```

---

## Security Best Practices

```bash
# 1. Never commit secrets
echo ".env" >> .gitignore

# 2. If you accidentally commit a secret — ROTATE IT IMMEDIATELY
# Then remove it from history:
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch secret.env" \
  --prune-empty --tag-name-filter cat -- --all

# Or use the modern tool:
# https://github.com/newren/git-filter-repo
pip install git-filter-repo
git filter-repo --path secret.env --invert-paths

# 3. Force-push all branches to overwrite remote history
git push origin --force --all
```

---

## Useful Git Aliases to Add to `~/.gitconfig`

```ini
[alias]
    st = status -s
    lg = log --oneline --graph --all --decorate
    last = log -1 HEAD --stat
    unstage = restore --staged
    discard = restore
    aliases = config --get-regexp alias
    wip = !git add -A && git commit -m "WIP: checkpoint"
    undo = reset --soft HEAD~1
    pushf = push --force-with-lease
```

---

## Common Gotchas

| Situation | What to do |
| ----------- | ----------- |
| Committed to `main` by mistake | `git reset --soft HEAD~1` → create branch → push |
| Pushed a commit with a typo in message | `git commit --amend` + `git push --force-with-lease` |
| Accidentally deleted a branch | `git reflog` → find hash → `git switch -c recovered abc123` |
| `.gitignore` not working | File was already tracked — `git rm --cached <file>` |
| Merge conflict on every pull | Use `git pull --rebase` as default |

---

## Git Cheat Sheet

```bash
# Daily workflow
git status                      # What's going on?
git add -p                      # Stage interactively
git commit -m "type: message"   # Commit with message
git push                        # Push to remote
git pull --rebase               # Get latest changes

# Branch management  
git switch -c feature/name      # New branch
git switch main                 # Back to main
git branch -d feature/name      # Delete after merge

# History inspection
git log --oneline --graph --all # Visual history
git diff HEAD                   # All uncommitted changes
git show HEAD                   # Latest commit details

# Undo things
git restore .                   # Discard all unstaged changes
git reset --soft HEAD~1         # Undo last commit (keep changes)
git revert HEAD                 # Undo with new commit (safe)
git stash                       # Save WIP for later
```

---

Congratulations on completing the Git Basics Course! 🎉

You now have all the tools to work confidently with Git in real-world projects. The best way to solidify this knowledge is to use Git every day — even for personal projects.
