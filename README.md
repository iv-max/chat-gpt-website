# Chat‑GPT Website
Maksim Ivaniuta
Demonstration of deploying website to github pages.

## The Purpose of Repository

This repository hosts my personal website (“Chat‑GPT Website”), where I present test webpage that was on 99% made by chatGPT. It also serves as a playground for refining a modern, responsive portfolio and experimenting with AI‑assisted content.

---


## GitHub Actions Deployment Workflow

This repository uses a GitHub Actions workflow named `Deploy static content to Pages` to automatically deploy the website to GitHub Pages.

### How It Works
- **Triggers**: The workflow is triggered by any push to the `main` branch, as well as manually through the Actions tab.
- **Steps**:
  1. **Checkout**: Checks out the repository code.
  2. **Setup Pages**: Configures the environment for GitHub Pages.
  3. **Upload Artifact**: Packages the website files for deployment.
  4. **Deploy to GitHub Pages**: Deploys the artifact to the live GitHub Pages site.

### Excluding Unwanted Files
To exclude certain files or directories from deployment, you can use a `.gitignore` file. The workflow will only upload files tracked by Git.

### Manual Deployment
To run the deployment manually:
1. Go to the "Actions" tab in your repository.
2. Select the latest workflow run or click on the workflow name.
3. Use the "Run workflow" button to manually trigger the deployment.

### Why Use This Workflow
By using GitHub Actions instead of the default GitHub Pages publishing, we gain more control over the deployment process. This allows us to customize steps, exclude certain files if needed, and manually trigger deployments when desired.



---

# Previous steps:


## Steps I Took to Set Up Git and Push Code

I already had Git on my mac, I only had to remember how to use it.

---

## Challenges Faced

**Initial problem:**  
 `remote: Invalid username or token. Password authentication is not supported for Git operations.`  
 \
 **Resolution:**

**used** <br/>
_ssh -T git@github.com_\
**to test the connection**

**Received that response:**\
_Hi iv-max! You've successfully authenticated, but GitHub does not provide shell access._  
\
\
**used**\
_git remote -v_\
**to check Git remote**

**Response:**

_orogon https://github.com/iv-max/chat-gpt-website.git (fetch)_  
_orogon https://github.com/iv-max/chat-gpt-website.git (push)_
\
\
\
**I also made typo in origin...**

**Renaming:**

_git remote rename orogon origin_

**And then everything worked well**

_git remote set-url origin git@github.com:iv-max/chat-gpt-website.git_

---
