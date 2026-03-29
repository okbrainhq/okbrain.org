---
title: Production Deployment to a Local Mac
---

This guide covers running OKBrain on a MacBook with a Linux VM handling the app server. The Mac host runs Ollama for local models, and the VM runs OKBrain via PM2.

## Architecture

* **Mac host** — runs Ollama (for local AI models and embeddings)
* **Linux VM** — runs OKBrain (Debian on UTM, OrbStack, or Parallels)

## Setup the Linux VM

Install a Debian Desktop OS using your preferred VM tool. Then set a hostname:

```bash
sudo hostnamectl set-hostname mybrain
```

**Restart the VM after this.**

Run the deploy setup script from your Mac:

```bash
./scripts/deploy/setup.sh [user@mybrain.local]
```

This provisions the VM with Node.js 20, PM2, Caddy, sandbox tools, and all necessary dependencies.

## Configure Environment Variables on the VM

SSH into the VM:

```bash
ssh yourusername@mybrain.local
```

Create `.env.local` in the app directory (`/var/www/brain/`):

```
JWT_SECRET=<generate with: openssl rand -base64 32>
GOOGLE_API_KEY=<your-google-api-key>
OLLAMA_URL=http://<mac-ip-address>:11434
```

Add any other optional variables (see [Enabling Additional Features](/harness/enabling-features/)).

## Set Up Ollama on the Mac

Install Ollama on your Mac from [ollama.com](https://ollama.com). Pull the models you need:

```bash
ollama pull qwen3.5:4b
ollama pull nomic-embed-text:v1.5
```

Make sure the VM can reach Ollama on the Mac. You can verify by running from the VM:

```bash
curl http://<mac-ip-address>:11434/api/tags
```

## Network Connectivity (Optional)

For reliable connectivity between your Mac and the VM:

* **Tailscale** — install on both Mac and VM for a mesh network that works everywhere
* **ngrok** — for exposing the VM to the internet with HTTPS

## Prevent Mac Sleep

Since the VM depends on the Mac, prevent it from sleeping. Run this on the Mac:

```bash
sudo pmset disablesleep 1
```

To re-enable sleep later:

```bash
sudo pmset disablesleep 0
```

## Deploy

From your Mac, run:

```bash
./deploy-now
```

This deploys to the VM, pulls the latest code, builds, and restarts the app via PM2.

## Automatic Backups (Optional)

You can set up daily backups from the VM to your Mac using the built-in backup script. This runs a LaunchAgent on the Mac at 3:00 AM, backs up the SQLite database and uploaded files with 30-day retention.

## Mobile Access

Once deployed, open the app URL in Safari (iOS) or Chrome (Android) and add it to your home screen as a Progressive Web App. See [PWA & Mobile App](/harness/pwa-mobile/) for details.
