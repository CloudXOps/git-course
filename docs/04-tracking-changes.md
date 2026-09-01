# Module 04 — Tracking Changes

## `git log` — Viewing History

```bash
git log                          # Full log
git log --oneline                # Compact: one commit per line
git log --oneline --graph --all  # Visual branch graph
git log -5                       # Last 5 commits
git log --author="Jane"          # Filter by author
git log --since="2 weeks ago"    # Filter by date
git log -- path/to/file.js       # Commits that touched a file
git log --grep="fix"             # Search commit messages
```

---

## `git diff` — Viewing Changes

```bash
git diff                    # Unstaged changes (working tree vs index)
git diff --staged           # Staged changes (index vs last commit)
git diff HEAD               # All changes since last commit
git diff abc123 def456      # Between two commits
git diff main feature-x     # Between two branches
git diff --stat             # Summary of changed files only
```

---

## `.gitignore` — Ignoring Files

Git ignores files matching patterns in `.gitignore`. This repo has one set up at the root.

### Pattern Syntax

```gitignore
# Comment

node_modules/       # Ignore this directory
*.log               # All .log files
!important.log      # But NOT this one (negation)
/dist               # Only dist/ at the root level
src/**/*.test.js    # Nested glob pattern
```

### Checking What's Ignored

```bash
git status --ignored           # Show ignored files
git check-ignore -v node_modules/  # Explain why something is ignored
```

### `.gitignore` Doesn't Work on Already-Tracked Files

If you already committed a file and now want to ignore it:

```bash
git rm --cached secret.env    # Remove from tracking (keep file on disk)
echo "secret.env" >> .gitignore
git commit -m "chore: stop tracking secret.env"
```

---

## `git show` — Inspect a Commit

```bash
git show                    # Show last commit + its diff
git show abc1234            # Show specific commit
git show HEAD~2             # Two commits before HEAD
git show HEAD:index.html    # Show a file as it was at HEAD
```

---

## `git blame` — Who Changed This Line?

```bash
git blame app.js
git blame -L 10,25 app.js   # Lines 10–25 only
```

---

## Referencing Commits

| Ref | Meaning |
| ----- | --------- |
| `HEAD` | Currently checked-out commit |
| `HEAD~1` or `HEAD^` | One commit before HEAD |
| `HEAD~3` | Three commits before HEAD |
| `abc1234` | Full or short commit hash |
| `main` | Tip of the `main` branch |
| `v1.0` | A tag |

---

## 🛠️ Hands-On

```bash
# Make a change to project/style.css, then:
git diff                          # See the unstaged change
git add style.css
git diff --staged                 # See the staged change
git commit -m "style: add base CSS variables and reset"
git log --oneline                 # See both commits
git show HEAD                     # Inspect the last commit
```

---

## Next Steps

➡️ Continue to [Module 05 — Branching](05-branching.md)
