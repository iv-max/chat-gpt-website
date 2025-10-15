# Chat‑GPT Website
Maksim Ivaniuta
Demonstration of deploying website to github pages.

## The Purpose of Repository

This repository hosts my personal website (“Chat‑GPT Website”), where I present test webpage that was on 99% made by chatGPT. It also serves as a playground for refining a modern, responsive portfolio and experimenting with AI‑assisted content.

---

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
