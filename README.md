# Portfolio Website

This repository contains the portfolio website with animated project overviews and detail pages.

## Run the project locally
1. Make sure Python is installed.
2. Open a terminal in the project folder and start a local server:
   ```bash
   python -m http.server 8000
   ```
3. Visit `http://localhost:8000/index.html` in your browser. Stop the server with `Ctrl+C`.

## Revert changes
If you accidentally changed a file such as `style.css` and want to revert to the last commit:
```bash
git checkout -- style.css
```
Or, to discard all local changes:
```bash
git reset --hard HEAD
git clean -fd
```
> **Warning:** This permanently removes uncommitted changes.

## Create a branch, commit & push
1. Pull the latest state from the remote:
   ```bash
   git fetch origin
   git pull
   ```
2. Create a new branch for your change:
   ```bash
   git checkout -b feature/my-change
   ```
3. Make your edits and check the status:
   ```bash
   git status
   ```
4. Add the modified files and commit them:
   ```bash
   git add .
   git commit -m "Describe your change"
   ```
5. Push the branch to GitHub:
   ```bash
   git push -u origin feature/my-change
   ```

## Open a pull request
1. Open the repository on GitHub. After the push you will see a notice that a new branch is available.
2. Click **Compare & pull request** or go to **Pull requests → New pull request** and choose your branch as the source.
3. Add a title and description, review the changes, and click **Create pull request**.

## Update GitHub Pages
1. Merge your branch into the branch used for GitHub Pages (e.g. `main`).
2. Wait a few minutes for GitHub Pages to finish the build.
3. Visit `https://<username>.github.io/<repository>/` to see the updated site.

