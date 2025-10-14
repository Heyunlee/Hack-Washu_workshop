# Hackathon Workshop: Git, Terminal, and Deployment 🚀

Welcome to the **Hackathon Workshop**! 🎉  
This workshop is designed to help you get **comfortable with Git, GitHub, and terminal commands** while building and deploying a fun **toy webpage**.  
By the end of this session, you will be able to:
- Navigate your computer with the terminal
- Use Git to track and manage your code
- Work with branches and forks
- Solve common Git errors
- Deploy a website with GitHub Pages

---

## Workshop Topics (Week 1)

1. **Intro to Terminal Commands**
   - Moving around: `cd`, `ls`, `pwd`
   - File management: `mkdir`, `rm`, `touch`, `mv`
   - Viewing file contents: `cat`, `nano`

2. **Intro to Git**
   - Setting up Git & GitHub
   - `git init`, `git clone`
   - Staging (`git add`) and committing (`git commit`)
   - Undoing commits (`git reset`, `git revert`)
   - Pushing and pulling (`git push`, `git pull`)

3. **Branches & Forks**
   - Why branches matter
   - Creating and switching branches
   - Forking repos and making pull requests

4. **Common Errors**
   - Two `.git` folders issue
   - Merge conflicts
   - Working with remote branches

5. **Deployment**
   - Using **GitHub Pages** to deploy the toy webpage

---

## Getting Started

### Prerequisites**
Make sure you have the following installed:
- [Git](https://git-scm.com/downloads)
- A [GitHub account](https://github.com)
- [VS Code](https://code.visualstudio.com/) or another code editor

---

### **1. What is Git?**
Git is a distributed version control system (VCS) used to track changes in files and collaborate with others

Github is a cloud-based platform to store, share, and collaborate on Git repositories

**Basic concepts**
| **Command**             | **What It Does** |
|--------------------------|------------------|
| Repository (Repo) | A project folder tracked by Git |
| Commit | A snapshot of repository at a specific point in time |
| Branch      | Independent line of development with in a project |
| Merge | Combining changes from one branch into another branch |
| Pull | Fetching changes from a remote repository and merges them into your current local branch |
| Push   | Uploading your local commits to a remote repository|
| Clone     | Copying remote repo to your computer |

---
### **2. Fork This Repository**
Before you clone the project, you should fork it.
Forking creates your own copy of the original repository under your Github account so you can make changes safely

Steps to fork:
1. In the top right corner of this repository, click "Fork"
2. Select your Github account as the destination
3. Github will create a copy of the repo under https://github.com/YOUR-USERNAME/hackathon-workshop

You're ready to go!

### **3. Clone This Repository**
Once your fork is created, copy your own repo's URL (Not the original one):
```bash
git clone https://github.com/YOUR-USERNAME/hackathon-workshop.git
cd hackathon-workshop
```

---

### **4. Explore the Toy Webpage**
Navigate to the `toy-website` folder:
```bash
cd toy-website
```

Open `index.html` in your browser or editor to see the starting point for your project.
- You can double-click 'index.html' or drag the file into a browser to open.
---

## Basic Git Workflow


Here’s the most common workflow you’ll use:

```bash
# Check the status of your repo
git status

# Stage changes
git add <filename>      # or git add .

# Commit staged changess
git commit -m "Your message here"

# Push your changes to GitHub
git push origin main

# Pull down the latest changes
git pull origin main
```

---

## 🔄 Undoing Mistakes

| **Command**             | **What It Does** |
|--------------------------|------------------|
| `git reset --soft HEAD~1` | Undo the last commit but keep changes staged |
| `git reset --hard HEAD~1` | Completely remove the last commit and changes |
| `git revert <hash>`       | Safely undo a specific commit |

---

## Practice Activity: Branching
1. Create a new branch:
   ```bash
   git checkout -b feature-new-section
   ```
2. Edit `toy-website/index.html` (add a section or feature).
3. Stage, commit, and push changes:
   ```bash
   git add .
   git commit -m "Added new section"
   git push origin feature-new-section
   ```
4. Open a Pull Request on GitHub to merge back into `main`.
5. Now you should see the your commit message and changes you made on the main branch
---

## Common Git Errors

### **Error: "fatal: not a git repository"**
- You’re in the wrong folder or forgot to initialize Git.
- Fix:
  ```bash
  git init
  ```

### **Error: Multiple `.git` Folders**
- Happens when you run `git init` **and** `git clone` on the same project.
- Fix:
  1. Delete the extra `.git` folder:
     ```bash
     rm -rf .git
     ```
  2. Re-clone the project cleanly.

### **Error: Merge Conflict**
- Git can’t automatically combine changes.
- Open the file, look for:
  ```
  <<<<<<< HEAD
  Your changes
  =======
  Their changes
  >>>>>>> branch-name
  ```
- Keep the correct version, delete the symbols, and commit.

---

## Deploying with GitHub Pages

1. Go to **Settings → Pages** in your GitHub repo.
2. Under **Source**, select:
   - Branch: `main`
   - Folder: `/root`
3. Click **Save**.
4. Your live site will be at:
   ```
   https://<your-username>.github.io/hackathon-workshop/
   ```

---

## Extra Resources
- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Git Cheat Sheet (PDF)](https://education.github.com/git-cheat-sheet-education.pdf)

---

