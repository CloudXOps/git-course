# Exercise 02 — Branching Practice

## Goal

Create feature branches, commit on them, and switch between branches.

## Setup

```bash
# Navigate to the project folder
cd ../../project/
```

## Steps

1. **Check your current branch**

   ```bash
   git branch        # Should show: * main
   git log --oneline
   ```

2. **Create a feature branch**

   ```bash
   git switch -c feature/update-title
   ```

3. **Make a change** — Open `index.html` and update the `<title>` tag to:

   ```html
   <title>TaskFlow v2 — My Tasks</title>
   ```

4. **Commit the change**

   ```bash
   git add index.html
   git commit -m "feat: update page title to TaskFlow v2"
   ```

5. **Inspect the branch graph**

   ```bash
   git log --oneline --graph --all
   ```

6. **Switch back to main**

   ```bash
   git switch main
   # Open index.html — the title change is gone (it's on the feature branch)
   ```

## Challenge

Create a second branch `feature/dark-mode` from `main`, add `data-theme="dark"` to the `<html>` tag, commit it, then use `git log --oneline --graph --all` to see both branches diverging from `main`.

## Expected Branch Graph

```
* c3d4ef5 (feature/dark-mode) style: add dark-mode theme attribute
| * a1b2c3d (feature/update-title) feat: update page title to TaskFlow v2
|/
* 9f8e7d6 (HEAD -> main) feat: initial TaskFlow project
```
