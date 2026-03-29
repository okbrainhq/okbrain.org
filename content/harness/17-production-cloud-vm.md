---
title: Production Deployment to a Cloud VM
---

This guide covers deploying OKBrain to a remote Debian server (e.g., a cloud VM from DigitalOcean, Hetzner, AWS, etc.).

## One-Time Server Setup

Create a `.deploy` file in the project root with your server details:

```
DEPLOY_HOST="your-server-hostname"
REPO_URL="https://github.com/okbrainhq/OKBrain-Harness.git"
```

Then run the setup script from your local machine:

```bash
./scripts/deploy/setup.sh [user@host]
```

Add `--setup-ollama` if you want Ollama installed on the server:

```bash
./scripts/deploy/setup.sh [user@host] --setup-ollama
```

This script provisions the server with:

* Node.js 20
* PM2 (process manager)
* Caddy (reverse proxy with automatic TLS)
* Optional Ollama + `nomic-embed-text` embedding model
* Sandbox tools (ffmpeg, python3, jq, imagemagick) and data science libraries
* A `brain-sandbox` user for running shell commands securely
* SSH hardening, Fail2Ban, and UFW firewall

## Configure Environment Variables

SSH into your server and create `.env.local` in the app directory (`/var/www/brain/`):

```bash
ssh your-server-hostname
```

```bash
JWT_SECRET=<generate with: openssl rand -base64 32>
GOOGLE_API_KEY=<your-google-api-key>
```

Add any other optional variables (see [Enabling Additional Features](/harness/enabling-features/)).

## Deploying

From your local machine, run:

```bash
./deploy-now
```

This connects to the server, pulls the latest code, installs dependencies, builds, and restarts the app via PM2.

## HTTPS with ngrok (Optional)

If you need a public HTTPS URL without a domain, use ngrok:

```bash
./scripts/deploy/setup-ngrok.sh [user@host] install <authtoken> <domain>
```

This sets up ngrok as a systemd service that proxies `https://<domain>` to `localhost:3000`.

## Download the Database

To download a copy of the production database (WAL-safe backup):

```bash
./scripts/deploy/download-db.sh
```

This creates a backup on the server first, downloads it, and cleans up.
