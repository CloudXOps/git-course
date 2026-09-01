# Exercise 03 — Merging & Conflict Resolution

## Goal

Practice merging branches and resolving a merge conflict.

## Part A: Fast-Forward Merge

```bash
git switch main

# Merge the feature/update-title branch (fast-forward)
git merge feature/update-title

git log --oneline --graph --all
# Notice: no merge commit — pointer just moved forward
```

## Part B: Create a Conflict

1. **On `main`, change the app title in `app.js`:**

   ```bash
   git switch main
   # Open app.js and add this near the top:
   # const APP_NAME = 'TaskFlow';
   git commit -am "chore: define APP_NAME constant on main"
   ```

2. **On a feature branch, change the same line differently:**

   ```bash
   git switch -c feature/rebrand
   # Open app.js and change it to:
   # const APP_NAME = 'TaskFlow Pro';
   git commit -am "chore: rebrand app to TaskFlow Pro"
   ```

3. **Trigger the conflict:**

   ```bash
   git switch main
   git merge feature/rebrand
   # → CONFLICT!
   ```

## Part C: Resolve the Conflict

1. Open `app.js` — find the conflict markers:

   ```
   <<<<<<< HEAD
   const APP_NAME = 'TaskFlow';
   =======
   const APP_NAME = 'TaskFlow Pro';
   >>>>>>> feature/rebrand
   ```

2. Edit the file to keep your preferred version (remove ALL conflict markers).

3. Stage and commit:

   ```bash
   git add app.js
   git commit   # Git pre-fills the merge commit message
   ```

4. Verify:

   ```bash
   git log --oneline --graph --all
   ```

## Questions to Answer

- What does a merge commit look like in the graph?
- How is it different from a fast-forward merge?
- When would you use `git merge --abort`?
