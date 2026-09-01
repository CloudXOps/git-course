# Exercise 01 — Your First Commit

## Goal

Clone the course's remote repository and make your first commit.

## Steps

1. **Clone the remote repository**

   ```bash
   git clone git@github.com-personal:cloudxops/git-course.git
   cd git-course
   git status
   ```

2. **Add a new file to the project**

   create a new file inside `project/`:

   ```bash
   echo "<!-- TODO: task detail view -->" > project/task-detail.html
   git status   # What do you see?
   ```

3. **Stage the file**

   ```bash
   git add project/task-detail.html
   git status   # What changed?
   ```

4. **Make your first commit**

   ```bash
   git commit -m "feat: add placeholder task-detail page"
   ```

5. **Verify**

   ```bash
   git log --oneline
   git show HEAD
   ```

## Challenge

Add a second new file `project/notes.txt` with some content, stage only that file (not `task-detail.html`), then commit.

## Expected Outcome

```
$ git log --oneline
abc1234 docs: add notes file
def5678 feat: add placeholder task-detail page
```
