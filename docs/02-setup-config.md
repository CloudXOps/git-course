# Module 02 — Setup & Configuration

## Installing Git

### Linux (Debian/Ubuntu)

```bash
sudo apt update && sudo apt install git
```

### macOS

```bash
# Via Homebrew (recommended)
brew install git

# Or via Xcode Command Line Tools
xcode-select --install
```

### Windows

Download from [git-scm.com/downloads](https://git-scm.com/downloads) and run the installer.

---

## First-Time Configuration

Git uses three config levels (each overrides the one above it):

| Level | File location | Scope |
| ------- | -------------- | ------- |
| `--system` | `/etc/gitconfig` | All users on the machine |
| `--global` | `~/.gitconfig` | Your user account |
| `--local` | `.git/config` | This repo only |

### Set Your Identity

```bash
# Required — attached to every commit you make
git config --global user.name "Jane Doe"
git config --global user.email "jane@example.com"
```

### Set Default Branch Name

```bash
git config --global init.defaultBranch main
```

### Set Your Editor

```bash
# VS Code
git config --global core.editor "code --wait"

# Vim
git config --global core.editor "vim"

# Nano
git config --global core.editor "nano"
```

### Configure Line Endings

```bash
# macOS / Linux
git config --global core.autocrlf input

# Windows
git config --global core.autocrlf true
```

---

## Useful Aliases

Add shortcuts for common commands:

```bash
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.lg "log --oneline --graph --all --decorate"
```

Now `git lg` shows a pretty branch graph!

---

## Verify Your Config

```bash
# See all settings
git config --list

# See a specific setting
git config user.name

# Open global config in your editor
git config --global --edit
```

---

## Setting Up SSH Keys (for GitHub)

SSH keys let you push/pull without entering a password each time.

```bash
# 1. Generate a key pair
ssh-keygen -t ed25519 -C "jane@example.com"

# 2. Start the SSH agent
eval "$(ssh-agent -s)"

# 3. Add your private key
ssh-add ~/.ssh/id_ed25519

# 4. Copy your PUBLIC key to clipboard
cat ~/.ssh/id_ed25519.pub
# → paste this into GitHub: Settings > SSH and GPG keys > New SSH key

# 5. Test the connection
ssh -T git@github.com
```

---

## Next Steps

➡️ Continue to [Module 03 — Your First Repository](03-first-repo.md)
