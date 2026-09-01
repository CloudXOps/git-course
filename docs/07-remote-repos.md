# Module 07 — Remote Repositories

## What is a Remote?

A **remote** is a version of your repository hosted on a server (GitHub, GitLab, etc.).
The default remote is conventionally named `origin`.

---

## Working with Remotes

```bash
# List remotes
git remote -v

# Add a remote
git remote add origin git@github.com:yourname/taskflow.git

# Change a remote URL
git remote set-url origin git@github.com:yourname/taskflow.git

# Remove a remote
git remote remove upstream

# Rename a remote
git remote rename origin github
```

---

## Pushing Changes

```bash
# Push current branch to its upstream
git push

# Push and set upstream (first push of a new branch)
git push -u origin feature/task-filters

# Push a specific branch
git push origin main

# Push all branches
git push --all

# Push tags
git push --tags
git push origin v1.0.0          # Single tag
```

---

## Fetching vs Pulling

| Command | What it does |
| --------- | ------------- |
| `git fetch` | Downloads remote changes — does NOT modify working tree |
| `git pull` | `fetch` + `merge` (or `rebase`) into current branch |
| `git pull --rebase` | `fetch` + `rebase` (cleaner history) |

```bash
# Safe workflow: fetch first, inspect, then merge
git fetch origin
git log HEAD..origin/main --oneline    # See what's new on remote
git merge origin/main                  # Or: git pull

# Configure pull to rebase by default (recommended)
git config --global pull.rebase true
```

---

## Tracking Remote Branches

```bash
git branch -vv              # See tracking info for all local branches
git switch -t origin/feature/xyz  # Check out a remote branch locally
```

---

## Publishing a New Repo to GitHub

```bash
# 1. Create an empty repo on GitHub (no README, no .gitignore)

# 2. Add the remote
git remote add origin git@github.com:yourname/taskflow.git

# 3. Push
git push -u origin main
```

---

## Cloning

```bash
git clone git@github.com:yourname/taskflow.git
git clone git@github.com:yourname/taskflow.git my-folder  # Into custom folder
git clone --depth 1 git@github.com:org/huge-repo.git      # Shallow clone (faster)
```

---

## Tags

Tags mark specific commits (e.g., releases).

```bash
git tag                         # List tags
git tag v1.0.0                  # Lightweight tag
git tag -a v1.0.0 -m "Release 1.0.0"  # Annotated tag (preferred)
git show v1.0.0                 # Inspect a tag
git push origin v1.0.0          # Push a tag to remote
git push origin --tags          # Push all tags
git tag -d v1.0.0               # Delete local tag
git push origin --delete v1.0.0 # Delete remote tag
```

---

## 🛠️ Hands-On

```bash
# 1. Create a free repo on GitHub named "taskflow"
# 2. Link it:
git remote add origin git@github.com:YOUR_USERNAME/taskflow.git

# 3. Push everything:
git push -u origin main

# 4. Simulate a teammate's change: edit a file directly on GitHub,
#    then pull the change locally:
git fetch origin
git log HEAD..origin/main --oneline    # See the remote commit
git pull
```

---

## Next Steps

➡️ Continue to [Module 08 — Pull Requests & Collaboration](08-pull-requests.md)
