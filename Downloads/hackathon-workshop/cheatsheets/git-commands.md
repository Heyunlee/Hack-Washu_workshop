# Git Commands Cheatsheet

## Setup
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## Workflow
```bash
git status                  # Check changes
git add .                   # Stage all changes
git commit -m "message"     # Commit staged changes
git push origin main        # Push to GitHub
git pull origin main        # Pull latest changes
```

## Undoing
```bash
git reset --hard HEAD~1     # Undo last commit completely
git revert <commit-hash>    # Revert a specific commit
```
